import { css } from "../css";
import hashString from "@emotion/hash";
import { createPropsProxy } from "../utils";
import { $PROXY } from "solid-js";

const insertedVar = new Set<string>();
function createVarCss(key: string, realValue: any): any {
  const selectorValue = typeof realValue === "boolean" ? realValue : "css-" + hashString(JSON.stringify(realValue))
  const selector = `[${key}="${selectorValue}"]`;
  if (insertedVar.has(selector)) {
    return selectorValue;
  }
  insertedVar.add(selector);
  try {
    css({ [`${key.replace("var:", "--")}`]: realValue }, selector);
  } catch (e) {
    console.error(e);
  }
  return selectorValue
}

export function processVar<T>(props: T): T {
  const propsRef = props as any
  return createPropsProxy(props, {
    get(_, key) {
      if (key === $PROXY) {
        return propsRef
      }
      return typeof key === "string" && key.includes("var:") ? createVarCss(key, propsRef[key]) : propsRef[key]
    },
  })
}