import { JSX } from "solid-js/jsx-runtime";
import {
  ComponentProps,
  CustomComponentProps,
  CustomProps,
} from "../types/componentProps";
import { processClass } from "./processClass";
import { createComponent } from "solid-js/web";
import { processCustomProps } from "./processCustomProps";
import { mergeProps, splitProps } from "solid-js";

export function wrapperTagComponentProps<PROPS>(
  component: (props: PROPS) => JSX.Element
): (props: PROPS & ComponentProps & CustomProps) => JSX.Element {
  return (props: PROPS & ComponentProps & CustomProps) => {
    let afterProps = processClass(props) as PROPS & CustomProps;
    let afterProps2 = processCustomProps(afterProps) as PROPS;

    return createComponent(component, afterProps2);
  };
}

export function wrapperCustomComponentProps<PROPS>(
  component: (props: PROPS & CustomComponentProps) => JSX.Element
): (props: PROPS & ComponentProps & CustomProps) => JSX.Element {
  return (props: PROPS & ComponentProps & CustomProps) => {
    const afterProps = processClass(props) as PROPS & CustomComponentProps;

    //process custom
    let keys = Object.keys(props).filter((prop) =>
      prop.startsWith("custom:")
    ) as `custom:${string}`[];
    const [custom, other] = splitProps(afterProps as CustomProps, keys);

    const afterProps2 = mergeProps(other, {
      custom,
    }) as any;

    return createComponent(component, afterProps2);
  };
}
