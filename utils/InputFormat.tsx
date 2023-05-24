import { ethers } from "ethers";

// Checks whether the value of an input is a valid value.
// Returns undefined if valid, or an error message string if invalid.
export type InputFormat = (string) => string | undefined;

function regexFormat(regex: string, errorMessage: string) {
  const regexObj = new RegExp(regex);
  return (x: string) => {
    if (regexObj.test(x)) {
      return undefined;
    } else {
      return errorMessage;
    }
  };
}

function bigIntInputFormat(x: string): string | undefined {
  try {
    ethers.toBigInt(x);
    return undefined;
  } catch (error) {
    return 'Please enter a valid number, for example "1"';
  }
}

export const InputFormats: Record<string, InputFormat> = {
  // The 0| condition below means we don't show an error message when the user starts typing 0 as the first character.
  ZeroX: regexFormat(
    "^(0|0x[0-9A-Fa-f]*)$",
    'Please enter a hexadecimal string prefixed with 0x, for example "0xa19f"'
  ),
  Hex: regexFormat(
    "^[0-9A-Fa-f]*$",
    'Please enter a hexadecimal string prefixed with 0x, for example "a19f"'
  ),
  BigInt: bigIntInputFormat,
};
