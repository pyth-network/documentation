// components/DisplayGlobalVar.tsx

import React from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

const DisplayGlobalVar: React.FC = () => {
  const { queryParameters } = useGlobalContext();

  return (
    <div>
      <h3>Global Query Parameters:</h3>
      <p>{JSON.stringify(queryParameters)}</p>
    </div>
  );
};

export default DisplayGlobalVar;