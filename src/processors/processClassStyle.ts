import { mergeProps, splitProps } from "solid-js";
import { css } from "../css";

export function processClassStyle<T>(props: T): T {
  const [classProps, otherProps] = splitProps(props as any, [
    "classList",
    "classStyle",
  ]);
  const propStyleToClass = () => {
    if (!classProps.classStyle) {
      return classProps.classList;
    }
    let classList = { ...classProps.classList } as any;
    const keys = Object.keys(classProps.classStyle);

    keys.forEach((key) => {
      let className = css({
        [key]: classProps.classStyle[key],
      }).replace(".", "");
      classList[className] = true;
    });
    return classList;
  };

  return mergeProps(otherProps, {
    get classList() {
      return propStyleToClass();
    },
  }) as any;
}