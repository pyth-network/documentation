// components/DisplayGlobalVar.tsx

import React from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

const DisplayGlobalVar: React.FC = () => {
  const { keyValueStore } = useGlobalContext();

  return (
    <div>
      <h3>Global Query Parameters:</h3>
      <p>{JSON.stringify(keyValueStore)}</p>
    </div>
  );
};

export default DisplayGlobalVar;