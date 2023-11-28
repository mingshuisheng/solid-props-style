import { mergeProps, splitProps } from "solid-js";
import { CustomProps } from "../types";

export function processCustomProps<T extends CustomProps>(
  props: T
): Omit<T, keyof CustomProps> {
  let keys = Object.keys(props).filter((prop) =>
    prop.startsWith("custom:")
  ) as `custom:${string}`[];
  const [custom, other] = splitProps(props as CustomProps, keys);

  const decs = Object.getOwnPropertyDescriptors(custom);

  const obj = {} as any;

  keys.forEach((key) =>
    Object.defineProperty(obj, key.replace("custom:", ""), decs[key])
  );

  return mergeProps(other, obj) as any;
}
