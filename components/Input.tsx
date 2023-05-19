import React, {useEffect, useState} from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

interface InputProps {
  id: string,
}

/**
 * Generate an input field whose value is assigned to a key in the
 * global key/value store.
 *
 * @param id - the key in the global store that this input sets.
 */
const Input: React.FC<InputProps> = ({
                                       id,
                                     }) => {
  const { keyValueStore, setKeyValueStore } = useGlobalContext();

  const handleQueryChange = (key: string, value: string) => {
    setKeyValueStore((prev) => {
      const next = { ...prev, [key]: value}
      if (value === '') {
        delete next[key]
      }
      return next;
    });
  };

  return (<input
              type="text"
              id={id}
              name={id}
              value={keyValueStore[id] ? keyValueStore[id] : ''}
              onChange={(e) => handleQueryChange(id, e.target.value)}
              className={"context-input"}
            />
          );
};

export default Input;
