import React from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

/**
 * Debugging component that displays the current contents of the key/value store.
 */
const DisplayKeyValueStore: React.FC = () => {
  const { keyValueStore } = useGlobalContext();

  return (
    <div>
      <h3>Key-value store contents:</h3>
      <p>{JSON.stringify(keyValueStore)}</p>
    </div>
  );
};

export default DisplayKeyValueStore;