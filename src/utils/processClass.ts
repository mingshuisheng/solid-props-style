import { JSX, mergeProps, splitProps } from "solid-js";
import { CSSObject } from "@emotion/serialize";
import { css } from "@emotion/css";
import { styleKeys } from "./defaultStyleProps";
import { ComponentProps, StyleVarProps } from "../types/componentProps";

type ClassProps = ComponentProps & {
  classList?: JSX.HTMLAttributes<{}>["classList"];
  class?: JSX.HTMLAttributes<{}>["class"];
};

export function processClass<T extends ClassProps & StyleVarProps>(
  props: T
): Omit<T, keyof ComponentProps> {
  let varKeys = Object.keys(props).filter((prop) =>
    prop.startsWith("var:")
  ) as `var:${string}`[];

  const [styleProps, varProps, classProps, other] = splitProps(
    props as ClassProps & StyleVarProps,
    styleKeys,
    varKeys,
    ["classList", "class", "classStyle"]
  );

  const propStyleToClass = () => {
    let classList = { ...classProps.classList };
    let varPropsProcessed: Record<`--${string}`, any> = {};

    varKeys.forEach(
      (key) =>
        (varPropsProcessed[key.replace("var:", "--") as any] = varProps[key])
    );

    let targetStyle: CSSObject = {
      ...styleProps,
      ...classProps.classStyle,
      ...varPropsProcessed,
    };
    if (Object.keys(targetStyle).length) {
      let className = css(targetStyle);
      classList[`${className}`] = true;
    }
    return classList;
  };

  return mergeProps(other, {
    get classList() {
      return propStyleToClass();
    },
    get class() {
      return;
    },
  }) as any;
}
