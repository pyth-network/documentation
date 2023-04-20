import React, {useEffect, useRef} from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';
import {global} from "styled-jsx/css";

export interface ReplacementTarget {
  findToken: string,
  replacementParam: string,
  transform?: ((string) => string),
}


// Note: contractAddress is a special target
export default function DynamicCode ({ targets, children }) {
  const { queryParameters, contractAddress } = useGlobalContext();

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
      contractAddress, ...queryParameters
    }

    for (let target of targetRefs.current) {
      let value = possibleReplacements[target.replacementParam]
      if (target.transform !== undefined) {
        value = target.transform(value);
      }

      target.token.innerText = value;
    }
  }, [queryParameters, contractAddress])

  return <>
    <div ref={divRef} style={{ marginTop: '1.5rem' }}>{children}</div>
  </>
}
