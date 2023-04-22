import React, {useEffect, useState} from 'react';
import {getState, useGlobalContext} from '../contexts/GlobalContext';

interface SampleProps {
  keyValues: Record<string, (State) => string>,
  children?: React.ReactNode
}

/**
 * Automatically populate the `keyValue` store with an example set of
 * key/value pairs.
 */
const Sample: React.FC<SampleProps> = ({
                                       keyValues,
                                         children
                                       }) => {
  const globalContext = useGlobalContext();

  const state = getState(globalContext);

  const handleClick = () => {
    const nextKeyValues = {}
    for (let [key, value] of Object.entries(keyValues)) {
      nextKeyValues[key] = value(state)
    }

    globalContext.setKeyValueStore(() => nextKeyValues);
  };

  return (<button onClick={handleClick}>{children}</button>);
};

export default Sample;
