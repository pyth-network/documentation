
import React, {useEffect, useState} from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

interface RestGetProps {
  endpoint: string;
  queryParams: string[];
}

const RestGet: React.FC<RestGetProps> = ({
                                                               endpoint,
                                                               queryParams,
                                                             }) => {
  const [response, setResponse] = useState<string | undefined>(undefined);
  const [url, setUrl] = useState();

  const [isStale, setIsStale] = useState<boolean>(false);

  const { queryParameters } = useGlobalContext();

  useEffect(() => {
    setIsStale(true);
  }, [queryParameters])


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

  const handleRunCode = async () => {
    let queryParameterValues = {}

    for (let key of queryParams) {
      if (queryParameters[key] !== undefined) {
        queryParameterValues[key] = queryParameters[key];
      }
    }

    const getParams = encodeQueryData(queryParameterValues, true);
    const queryUrl = `${endpoint}${getParams ? '?' + getParams : ''}`;
    setUrl(queryUrl);

    try {
      const res = await fetch(queryUrl, { method: 'GET' });
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
      setIsStale(false);
    } catch (error) {
      setResponse(`Error: ${error.message}`);
      setIsStale(false);
    }
  };

  const clearResponse = async () => {
    setResponse(undefined)
  }

  return (<div className={"api-params"}>
    <button onClick={handleRunCode}>Execute</button>
    <button onClick={clearResponse}>Clear</button>
    {response !== undefined ?
      <div className={"trial " + (isStale ? "stale" : "")}>
        <div className={"request"}><span className={"method"}>GET</span> {url}</div>
        <pre>{response}</pre>
      </div>
      : <div className={"trial"} />
    }
  </div>);
};

export default RestGet;