// components/InteractiveApiDoc.tsx

import React, {useEffect, useState} from 'react';

interface WsDocProps {
  apiName: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  overview: string;
  queryParams: QueryParam[];
}

interface QueryParam {
  key: string,
  required: boolean,
  type: string,
  description: string,
  example: string,
}

interface ParamNameProps {

}

const ParamName: React.FC<ParamNameProps> = (props) => {
  return (<div><p className={"param-name"}>
    {props.name}{props.required === true ? <span className={"required"}>*</span> : '' }
    </p>
      <p className={"param-type"}>{props.type}</p>
    </div>
  );
}

const WsDoc: React.FC<WsDocProps> = ({
                                                               method,
                                                               endpoint,
                                                               queryParams,
                                                             }) => {
  const [response, setResponse] = useState<string | undefined>(undefined);
  const [url, setUrl] = useState()

  let initialQuery = {}
  for (let param of queryParams) {
    if (param.example !== '') {
      initialQuery[param.key] = param.example;
    }
  }
  const [query, setQuery] = useState<{ [key: string]: string }>(initialQuery);

  function encodeQueryData(data, urlEncode: boolean) {
    if (data === undefined) {
      return ''
    }

    const ret = [];
    for (const [key, value] of Object.entries(data)) {
      if (urlEncode) {
        ret.push(encodeURIComponent(key) + '=' + encodeURIComponent(value as string));
      } else {
        ret.push(key + '=' + encodeURIComponent(value as string));
      }
    }
    return ret.join('&');
  }

  const handleQueryChange = (key: string, value: string) => {
    setQuery((prev) => {
      const next = { ...prev, [key]: value}
      if (value === '') {
        delete next[key]
      }
      return next;
    });
  };

  // FIXME: this doesn't show the right thing if the URL is part of the response
  useEffect(() => {
    const queryParams = encodeQueryData(query, false);
    const url = `${endpoint}${queryParams ? '?' + queryParams : ''}`;
    setUrl(url);
  }, [query])

  const handleRunCode = async () => {
    const queryParams = encodeQueryData(query, true);
    const queryUrl = `${endpoint}${queryParams ? '?' + queryParams : ''}`;

    try {
      const res = await fetch(queryUrl, { method });
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }
  };

  const clearResponse = async () => {
    setResponse(undefined)
  }

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
              value={query[param.key]}
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

    <button onClick={handleRunCode}>Execute</button>
    <button onClick={clearResponse}>Clear</button>
      {response !== undefined ?
        <div className={"trial"}>
          <div className={"request"}><span className={"method"}>{method}</span> {url}</div>
          <pre>{response}</pre>
        </div>
        : <div className={"trial"} />
      }
  </div>);
};

export default WsDoc;