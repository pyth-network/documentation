import { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

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
const RestGet = ({ endpoint, queryParams }: RestGetProps) => {
  const [response, setResponse] = useState<string | undefined>(undefined);
  const [url, setUrl] = useState<string>("");

  const [isStale, setIsStale] = useState<boolean>(false);

  const { keyValueStore } = useGlobalContext();

  useEffect(() => {
    setIsStale(true);
  }, [keyValueStore]);

  /** Create a GET query string for the key/value pairs in data. Pass `urlEncode=true`
   * if you're actually querying the endpoint, or `false` to have the url display better for users.
   */
  function encodeQueryData(data: any, urlEncode: boolean) {
    if (data === undefined) {
      return "";
    }

    const ret = [];
    for (const [key, value] of Object.entries(data)) {
      if (urlEncode) {
        ret.push(
          encodeURIComponent(key) + "=" + encodeURIComponent(value as string)
        );
      } else {
        ret.push(key + "=" + encodeURIComponent(value as string));
      }
    }
    return ret.join("&");
  }

  const handleRunCode = async () => {
    const queryParameterValues: { [key: string]: string | undefined } = {};

    for (const key of queryParams) {
      if (keyValueStore[key] !== undefined) {
        queryParameterValues[key] = keyValueStore[key];
      }
    }

    const getParams = encodeQueryData(queryParameterValues, true);
    const queryUrl = `${endpoint}${getParams ? "?" + getParams : ""}`;
    setUrl(queryUrl);

    try {
      const res = await fetch(queryUrl, { method: "GET" });
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
      setIsStale(false);
    } catch (error) {
      setResponse(`Error: ${(error as Error).message}`);
      setIsStale(false);
    }
  };

  const clearResponse = async () => {
    setResponse(undefined);
  };

  return (
    <>
      <div className="flex space-x-2">
        <button
          className="bg-[#E6DAFE] text-[#141227] font-normal text-base hover:bg-[#F2ECFF] my-4"
          onClick={handleRunCode}
        >
          execute query
        </button>
        <button className="font-normal text-base my-4" onClick={clearResponse}>
          clear
        </button>
      </div>
      <div>
        {response !== undefined && (
          <div className={"response " + (isStale ? "stale" : "")}>
            <div className={"request"}>
              <span className={"method"}>GET</span> {url}
            </div>
            <pre>{response}</pre>
          </div>
        )}
      </div>
    </>
  );
};

export default RestGet;
