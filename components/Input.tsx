import React, {useEffect, useState} from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

interface InputProps {
  id: string,
  example?: string,
}

/**
 * Generate an input field whose value is assigned to a key in the
 * global key/value store.
 *
 * @param id - the key in the global store that this input sets.
 */
const Input: React.FC<InputProps> = ({
                                       id,
                                       example
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

  // Initialize query parameters from the given example values.
  useEffect(() => {
    let initialQuery = {...keyValueStore};
    if (example !== '' && keyValueStore[id] === undefined) {
      initialQuery[id] = example;
    }
    setKeyValueStore(initialQuery);
  }, []);

  return (<input
              type="text"
              id={id}
              name={id}
              value={keyValueStore[id] ? keyValueStore[id] : ''}
              onChange={(e) => handleQueryChange(id, e.target.value)}
            />
          );
};

export default Input;
