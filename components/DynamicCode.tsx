import React, {useEffect, useRef} from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';
import {global} from "styled-jsx/css";

export interface ReplacementTarget {
  // The token to find in the code block
  findToken: string,
  // The string to replace the found token with
  replacementParam: string,
  // A transformation to apply to the replacement string before
  transform?: ((string) => string),
}

/**
 * A syntax-highlighted code block with dynamic text. Nextra typically performs all syntax highlighting on the
 * server side, so we can't simply generate text in a syntax highlighting component. This component works around
 * the problem by finding and replacing specific tokens in an already-highlighted code block with new
 * caller-specified values.
 */
export default function DynamicCode ({ targets, children }) {
  const { keyValueStore, pythContractAddress } = useGlobalContext();

  const divRef = useRef();
  const targetRefs = useRef();
  // Find the corresponding token from the DOM
  useEffect(() => {
    if (divRef.current && !targetRefs.current) {
      let tokens = []
      for (let target of targets) {
        // TODO: may need to find more than one
        const token = [...divRef.current.querySelectorAll('code span')].find((el) => el.innerText === target.findToken);
        if (token !== undefined) {
          tokens.push( { token, ...target });
        }
      }
      targetRefs.current = tokens
    }

    const possibleReplacements = {
      pythContractAddress: pythContractAddress, ...keyValueStore
    }

    for (let target of targetRefs.current) {
      let value = possibleReplacements[target.replacementParam]
      if (target.transform !== undefined) {
        value = target.transform(value);
      }

      target.token.innerText = value;
    }
  }, [keyValueStore, pythContractAddress])

  return <>
    <div ref={divRef} style={{ marginTop: '1.5rem' }}>{children}</div>
  </>
}
