import { JSX } from "solid-js";
import { StyleProps, ClassStyle } from "./styleProps.ts";

export interface CustomProps {
  [key: `custom:${string}`]: any;
}

export interface ComponentProps extends StyleProps {
  classStyle?: ClassStyle;
}

export type CustomComponentProps = Pick<
  JSX.HTMLAttributes<{}>,
  "class" | "style" | "classList"
> & {
  custom?: CustomProps;
};
