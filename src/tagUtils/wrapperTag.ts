import { JSX } from "solid-js/jsx-runtime";
import { ComponentProps } from "../types/index.ts";
import { createComponent } from "solid-js/web";
import { flow } from "../utils/flow.ts";
import { processClassStyle, processStyleKeys, processVar } from "../processors/index.ts";

const processors = flow(processClassStyle, processVar, processStyleKeys);

export function wrapperTagComponentProps<PROPS>(
  component: (props: PROPS) => JSX.Element
) {
  return (props: PROPS & ComponentProps) => {
    return createComponent(component, processors(props));
  };
}
