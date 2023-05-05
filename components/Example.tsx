import React, {useEffect, useState} from 'react';
import {getState, useGlobalContext} from '../contexts/GlobalContext';

interface ExampleProps {
  keyValues: Record<string, (State) => string>,
  children?: React.ReactNode
}

/**
 * A button that populates the `keyValue` store with an example set of
 * key/value pairs when clicked. Use this to auto-generate sample queries
 * that users can try out.
 *
 * The values of the keys are provided as functions from the current global state
 * to string values. This allows the values to depend on e.g., the currently chosen network.
 */
const Example: React.FC<ExampleProps> = ({
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

export default Example;
