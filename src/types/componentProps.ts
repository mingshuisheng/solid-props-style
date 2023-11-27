import { JSX } from "solid-js/jsx-runtime";
import { StyleProps, ClassStyle } from "./styleProps.ts";

export interface ComponentProps extends StyleProps {
  classStyle?: ClassStyle;
}

export type CustomComponentProps = Pick<
  JSX.HTMLAttributes<{}>,
  "class" | "style" | "classList"
>;
