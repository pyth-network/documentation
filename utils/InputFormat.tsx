import { ethers } from "ethers";

// Checks whether the value of an input is a valid value.
// Returns undefined if valid, or an error message string if invalid.
export type InputFormat = (input: string) => string | undefined;

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

function byteArrayFormat(x: string): string | undefined {
  try {
    const o = JSON.parse(x);
    if (o instanceof Array) {
      for (let i = 0; i < o.length; i++) {
        if (!(o[i] instanceof Number && o[i] >= 0 && o[i] <= 255)) {
          return "Each entry must be a byte value in [0, 255]";
        }
      }
    } else {
      return "Please input an array of bytes";
    }
    return undefined;
  } catch (error) {
    return "Please input an array of bytes";
  }
}

function base64InputFormat(x: string): string | undefined {
  try {
    Buffer.from(x, "base64");
    return undefined;
  } catch (error) {
    return "Please enter a base64 string";
  }
}

export const InputFormats: Record<string, InputFormat> = {
  // The 0| condition below means we don't show an error message when the user starts typing 0 as the first character.
  ZeroX: regexFormat(
    "^(0|0x[0-9A-Fa-f]*)$",
    'Please enter a hexadecimal string prefixed with 0x, for example "0xa19f"',
  ),
  Hex: regexFormat(
    "^[0-9A-Fa-f]*$",
    'Please enter a hexadecimal string prefixed with 0x, for example "a19f"',
  ),
  BigInt: bigIntInputFormat,
  ByteArray: byteArrayFormat,
  Base64: base64InputFormat,
};
