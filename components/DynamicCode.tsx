import React, { useEffect, useMemo, useRef } from "react";
import {
  GlobalContextData,
  EvmNetworkConfig,
  useGlobalContext,
} from "../contexts/GlobalContext";

interface DynamicCodeProps {
  targets: Targets;
  children: React.ReactNode;
}

export type Targets = Record<string, (DynamicCodeRenderingContext) => string>;

/**
 * A syntax-highlighted code block with dynamic text. Nextra typically performs all syntax highlighting on the
 * server side, so we can't simply generate text in a syntax highlighting component. This component works around
 * the problem by finding and replacing specific tokens in an already-highlighted code block with new
 * caller-specified values.
 *
 * @param targets Map of find/replace targets. Each key represents a token in the code block to find and replace.
 *                The replacement string is generated by applying the corresponding function to the current state.
 *                This function has powerful capabilities, as it can read keys from the state and format them, etc.
 *                Note: at the moment, each key must be a complete syntax-highlighted unit of the formatted code
 *                (the complete `innerText` of an HTML element). This behavior could be generalized in the future.
 * @param children The element to which the find/replace targets are applied. You should typically provide a code block
 *                 like ```javascript myJavascriptCode() ```
 */
export const DynamicCode = ({ targets, children }: DynamicCodeProps) => {
  const context: GlobalContextData = useGlobalContext();
  const state = useMemo(
    () =>
      new DynamicCodeRenderingContext(
        context.keyValueStore,
        context.networkConfig
      ),
    [context.keyValueStore, context.networkConfig]
  );

  // These types are pretty gnarly so leave them as any
  const divRef = useRef<any>();
  const targetRefs = useRef<any>();
  // Find the corresponding token from the DOM
  useEffect(() => {
    if (divRef.current && !targetRefs.current) {
      const tokens = [];
      for (const [target, replacement] of Object.entries(targets)) {
        console.log(`target: ${target}`);

        // TODO: may need to find more than one
        // note: this explicitly filters out entire lines and only finds spans within lines
        // to preserve highlighting
        const token = [...divRef.current.querySelectorAll("code span")].find(
          (el) => el.innerText === target && el.className != "line"
        );
        if (token !== undefined) {
          tokens.push({ token, target, replacement });
        }
      }
      targetRefs.current = tokens;
    }

    for (const { token, replacement } of targetRefs.current) {
      token.innerText = replacement(state);
    }
  }, [state, targets]);

  return (
    <>
      <div ref={divRef} style={{ marginTop: "1.5rem" }}>
        {children}
      </div>
    </>
  );
};

/**
 * Context provided to dynamically render elements in the code block.
 */
export class DynamicCodeRenderingContext {
  // The global key-value store
  kv: Record<string, string>;
  /** The currently selected EVM network. */
  public evmConfig: EvmNetworkConfig | undefined;

  constructor(
    kv: Record<string, string>,
    evmConfig: EvmNetworkConfig | undefined
  ) {
    this.kv = kv;
    this.evmConfig = evmConfig;
  }

  /** Get the value of key from the global context, returning `orElse` if the key is not defined. */
  public get(key: string, orElse?: string): string {
    return this.kv[key] !== undefined ? this.kv[key] : orElse;
  }
}
