import {JSX} from "solid-js/jsx-runtime";
import {ComponentProps,} from "../types";
import {processClassStyle, processStyleKeys, processVar} from "./processClass";
import {createComponent} from "solid-js/web";
import {processCustomProps} from "./processCustomProps";
import {flow} from "./flow.ts";

const processors = flow(processClassStyle, processVar, processStyleKeys, processCustomProps);

export function wrapperTagComponentProps<PROPS>(component: (props: PROPS) => JSX.Element) {
  return (props: PROPS & ComponentProps) => {
    return createComponent(component, processors(props));
  };
}

export function wrapperCustomComponentProps<PROPS>(component: (props: PROPS & ComponentProps) => JSX.Element) {
  return (props: PROPS & ComponentProps) => {
    return createComponent(component, props);
  };
}
