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

/**
 * Generate a table of fillable query parameters. Each row describes a single `QueryParam`.
 * Any filled values of a given `param` are set as the value of the `param.key` in the global key-value store.
 *
 * TODO: this may be too large of an abstraction. It would be more flexible to let users write the table as
 * markdown and restrict this to a single form-fillable field.
 *
 * TODO: add input validation
 */
const QueryParameters: React.FC<QueryParametersProps> = ({
                                                           queryParams,
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
    for (let param of queryParams) {
      if (param.example !== '' && keyValueStore[param.key] === undefined) {
        initialQuery[param.key] = param.example;
      }
    }
    setKeyValueStore(initialQuery);
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
              value={keyValueStore[param.key] ? keyValueStore[param.key] : ''}
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

