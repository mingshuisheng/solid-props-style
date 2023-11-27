import { JSX, mergeProps, splitProps } from "solid-js";
import { CSSObject } from "@emotion/serialize";
import { css } from "@emotion/css";
import { styleKeys } from "./defaultStyleProps";
import { ComponentProps } from "../types/componentProps";

type ClassProps = ComponentProps & {
  classList?: JSX.HTMLAttributes<{}>["classList"];
  class?: JSX.HTMLAttributes<{}>["class"];
};

export function processClass<T extends ClassProps>(
  props: T
): Omit<T, keyof ComponentProps> {
  const [styleProps, classProps, other] = splitProps(
    props as ClassProps,
    styleKeys,
    ["classList", "class", "classStyle"]
  );

  const propStyleToClass = () => {
    let classList = { ...classProps.classList };

    let targetStyle: CSSObject = {
      ...styleProps,
      ...classProps.classStyle,
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
