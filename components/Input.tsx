import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import { InputFormat } from "../utils/InputFormat";

interface InputProps {
  id: string;
  format?: InputFormat;
}

/**
 * Generate an input field whose value is assigned to a key in the
 * global key/value store.
 *
 * @param id - the key in the global store that this input sets.
 */
const Input = ({ id, format }: InputProps) => {
  const { keyValueStore, setKeyValueStore } = useGlobalContext();
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const handleQueryChange = (key: string, value: string) => {
    setKeyValueStore((prev) => {
      const next = { ...prev, [key]: value };
      if (value === "") {
        delete next[key];
      }

      // generate an error message if the value is populated and has an expected format.
      if (value != "" && format !== undefined) {
        setErrorMessage(format(value));
      } else {
        setErrorMessage(undefined);
      }

      return next;
    });
  };

  return (
    <div>
      <input
        type="text"
        id={id}
        name={id}
        value={keyValueStore[id] ? keyValueStore[id] : ""}
        onChange={(e) => handleQueryChange(id, e.target.value)}
        className="w-full"
      />
      {errorMessage && <p className="input-error pt-2">{errorMessage}</p>}
    </div>
  );
};

export default Input;
