import { $PROXY } from "solid-js";
import { styleKeys, createPropsProxy, createCss } from "../utils";

const styleKeyReg = styleKeys.map((key) => RegExp(`^(.+:${key}|${key}$)`));
console.log(styleKeyReg)
const isStyleKey = (key: string) => styleKeyReg.some((reg) => reg.test(key))

export function processStyleKeys<T>(props: T): T {
  const propsRef = props as any
  return createPropsProxy(props, {
    get(_, key) {
      if (key === $PROXY) {
        return propsRef
      }

      return typeof key === "string" && !key.includes("var:") && !key.startsWith("attr:") && isStyleKey(key) ? createCss(key, propsRef[key]) : propsRef[key]
    },
  })
}