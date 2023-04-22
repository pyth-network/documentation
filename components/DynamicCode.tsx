import React, {useEffect, useRef} from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';
import {global} from "styled-jsx/css";

interface State {
  kv: Record<string, string>,
  get: (key: string, orElse?: string) => string
  addr: string
}

export type Targets = Record<string, ((State) => string)>

/**
 * A syntax-highlighted code block with dynamic text. Nextra typically performs all syntax highlighting on the
 * server side, so we can't simply generate text in a syntax highlighting component. This component works around
 * the problem by finding and replacing specific tokens in an already-highlighted code block with new
 * caller-specified values.
 */
export default function DynamicCode ({ targets, children }) {
  const {keyValueStore, pythContractAddress} = useGlobalContext();

  const divRef = useRef();
  const targetRefs = useRef();
  // Find the corresponding token from the DOM
  useEffect(() => {
    if (divRef.current && !targetRefs.current) {
      let tokens = []
      for (let [target, replacement] of Object.entries(targets)) {
        console.log(`target: ${target}`)

        // TODO: may need to find more than one
        const token = [...divRef.current.querySelectorAll('code span')].find((el) => el.innerText === target);
        if (token !== undefined) {
          tokens.push( { token, target, replacement });
        }
      }
      targetRefs.current = tokens
    }

    let state = {
      kv: keyValueStore,
      get: (k, o) => keyValueStore[k] !== undefined ? keyValueStore[k] : o,
      addr: pythContractAddress
    };
    for (let {token, replacement} of targetRefs.current) {
      // let value = possibleReplacements[target.replacementParam]
      let value = replacement(state);
      token.innerText = value;
    }
  }, [keyValueStore, pythContractAddress])

  return <>
    <div ref={divRef} style={{ marginTop: '1.5rem' }}>{children}</div>
  </>
}
