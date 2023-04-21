
import React, {useEffect, useState} from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

interface RestGetProps {
  endpoint: string;
  queryParams: string[];
}

/**
 * Allow the user to submit an HTTP GET request to `endpoint?queryParam1=value1&queryParam2=value2`,
 * where the values are obtained by retrieving the value of the corresponding queryParam from
 * the global key-value store.
 *
 * TODO: queryParams should probably be a mapping from the query parameter name to the global store key,
 * so that the two sets of names aren't coupled.
 */
const RestGet: React.FC<RestGetProps> = ({
                                                               endpoint,
                                                               queryParams,
                                                             }) => {
  const [response, setResponse] = useState<string | undefined>(undefined);
  const [url, setUrl] = useState();

  const [isStale, setIsStale] = useState<boolean>(false);

  const { keyValueStore } = useGlobalContext();

  useEffect(() => {
    setIsStale(true);
  }, [keyValueStore])

  /** Create a GET query string for the key/value pairs in data. Pass `urlEncode=true`
   * if you're actually querying the endpoint, or `false` to have the url display better for users.
   */
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
      if (keyValueStore[key] !== undefined) {
        queryParameterValues[key] = keyValueStore[key];
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