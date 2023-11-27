import { JSX } from "solid-js/jsx-runtime";
import { ComponentProps, CustomComponentProps } from "../types/componentProps";
import { processClass } from "./processClass";
import { Dynamic } from "solid-js/web";

export function wrapperComponentProps<PROPS extends {}>(
  component: (props: PROPS) => JSX.Element
): (props: PROPS & ComponentProps) => JSX.Element {
  return (props: PROPS & ComponentProps) => {
    const afterProps = processClass(props) as PROPS;

    return <Dynamic component={component} {...afterProps} />;
  };
}

export function wrapperCustomComponentProps<PROPS>(
  component: (props: PROPS & CustomComponentProps) => JSX.Element
): (props: PROPS & ComponentProps) => JSX.Element {
  return (props: PROPS & ComponentProps) => {
    const afterProps = processClass(props) as PROPS & CustomComponentProps;

    return <Dynamic component={component} {...afterProps} />;
  };
}
