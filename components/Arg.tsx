import React, {useEffect, useState} from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

interface ArgProps {
  required?: boolean,
  type: string,
  children?: React.ReactNode
}

const Arg: React.FC<ArgProps> = ({
                                       required,
                                       type,
  children
                                     }) => {

  return (<div><p className={"param-name"}>
    {children}{required === true ? <span className={"required"}>*</span> : '' }
  </p>
    <p className={"param-type"}>{type}</p>
  </div>);
};

export default Arg;
