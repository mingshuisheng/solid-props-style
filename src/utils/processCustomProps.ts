import {mergeProps, splitProps} from "solid-js";
import {CustomProps} from "../types";

export function processCustomProps<T>(props: T): T {
  let keys = Object.keys(props as any).filter((prop) =>
    prop.startsWith("attr:")
  ) as `attr:${string}`[];
  const [custom, other] = splitProps(props as CustomProps, keys);

  const decs = Object.getOwnPropertyDescriptors(custom);

  const obj = {} as any;

  keys.forEach((key) =>
    Object.defineProperty(obj, key.replace("attr:", ""), decs[key])
  );

  return mergeProps(other, obj) as any;
}
