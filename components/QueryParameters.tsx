import React, {useEffect, useState} from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

interface QueryParam {
  key: string,
  required: boolean,
  type: string,
  description: string,
  example: string,
}

interface QueryParametersProps {
  queryParams: QueryParam[];
}

const QueryParameters: React.FC<QueryParametersProps> = ({
                                                           queryParams,
                                                         }) => {

  const { queryParameters, setQueryParameters } = useGlobalContext();

  const handleQueryChange = (key: string, value: string) => {
    setQueryParameters((prev) => {
      const next = { ...prev, [key]: value}
      if (value === '') {
        delete next[key]
      }
      return next;
    });
  };

  // initialize query parameters from the given example values.
  useEffect(() => {
    let initialQuery = {...queryParameters};
    for (let param of queryParams) {
      if (param.example !== '' && queryParameters[param.key] === undefined) {
        initialQuery[param.key] = param.example;
      }
    }
    setQueryParameters(initialQuery);
  }, []);

  return (<div className={"api-params"}>
    <table>
      <tbody>
      {queryParams.map((param) => (
        <tr key={param.key} >
          <td>
            <ParamName name={param.key} required={param.required} type={param.type} />
          </td>
          <td>
            <input
              type="text"
              id={param.key}
              name={param.key}
              value={queryParameters[param.key] ? queryParameters[param.key] : ''}
              onChange={(e) => handleQueryChange(param.key, e.target.value)}
            />
          </td>
          <td>
            {param.description}
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>);
};

export default QueryParameters;

interface ParamNameProps {
  name: string,
  required: boolean
}

const ParamName: React.FC<ParamNameProps> = (props) => {
  return (<div><p className={"param-name"}>
      {props.name}{props.required === true ? <span className={"required"}>*</span> : '' }
    </p>
      <p className={"param-type"}>{props.type}</p>
    </div>
  );
}

