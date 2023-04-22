import React, {useEffect, useState} from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

interface InputProps {
  id: string,
  example: string,
}

/**
 * Generate a table of fillable query parameters. Each row describes a single `QueryParam`.
 * Any filled values of a given `param` are set as the value of the `param.key` in the global key-value store.
 *
 * TODO: this may be too large of an abstraction. It would be more flexible to let users write the table as
 * markdown and restrict this to a single form-fillable field.
 *
 * TODO: add input validation
 */
const Input: React.FC<InputProps> = ({
                                       id,
                                       example
                                                         }) => {
  console.log(`key: ${id}`)

  const { keyValueStore, setKeyValueStore } = useGlobalContext();

  const handleQueryChange = (key: string, value: string) => {
    console.log(`queryChange: ${key} ${value}`)
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
