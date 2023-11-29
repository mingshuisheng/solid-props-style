import { JSX } from "solid-js/jsx-runtime";
import {
  ComponentProps,
  CustomComponentProps,
  CustomProps,
  StyleVarProps,
} from "../types/componentProps";
import { processClass } from "./processClass";
import { createComponent } from "solid-js/web";
import { processCustomProps } from "./processCustomProps";
import { mergeProps, splitProps } from "solid-js";

export function wrapperTagComponentProps<PROPS>(
  component: (props: PROPS) => JSX.Element
): (
  props: PROPS & ComponentProps & CustomProps & StyleVarProps
) => JSX.Element {
  return (props: PROPS & ComponentProps & CustomProps & StyleVarProps) => {
    let afterProps = processClass(props) as PROPS & CustomProps;
    let afterProps2 = processCustomProps(afterProps) as PROPS;

    return createComponent(component, afterProps2);
  };
}

export function wrapperCustomComponentProps<PROPS>(
  component: (props: PROPS & CustomComponentProps) => JSX.Element
): (
  props: PROPS & ComponentProps & CustomProps & StyleVarProps
) => JSX.Element {
  return (props: PROPS & ComponentProps & CustomProps & StyleVarProps) => {
    const afterProps = processClass(props) as PROPS & CustomComponentProps;

    //process custom
    let keys = Object.keys(props).filter((prop) =>
      prop.startsWith("attr:")
    ) as `attr:${string}`[];
    const [attrs, other] = splitProps(afterProps as CustomProps, keys);

    const afterProps2 = mergeProps(other, {
      attrs,
    }) as any;

    return createComponent(component, afterProps2);
  };
}
