import { JSX } from "solid-js/jsx-runtime";
import { ComponentProps } from "../types";
import {
  processClassStyle,
  processStyleKeys,
  processVar,
} from "./processClass";
import { createComponent } from "solid-js/web";
import { flow } from "./flow.ts";

const processors = flow(processClassStyle, processVar, processStyleKeys);

export function wrapperTagComponentProps<PROPS>(
  component: (props: PROPS) => JSX.Element
) {
  return (props: PROPS & ComponentProps) => {
    return createComponent(component, processors(props));
  };
}
