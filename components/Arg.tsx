import React from "react";

interface ArgProps {
  required?: boolean;
  type: string;
  children?: React.ReactNode;
}

/**
 * Formatting component for the argument to a function.
 *
 * @param required - `true` if the argument must be specified (generates a visual highlight)
 * @param type - A human-understandable type specification for the parameter
 *               TODO: we should probably make an enum for known types
 * @param children - the name of the parameter
 * @constructor
 */
const Arg: React.FC<ArgProps> = ({ required, type, children }) => {
  return (
    <div>
      <p className={"param-name"}>
        {children}
        {required === true ? <span className={"required"}>*</span> : ""}
      </p>
      <p className={"param-type"}>{type}</p>
    </div>
  );
};

export default Arg;
