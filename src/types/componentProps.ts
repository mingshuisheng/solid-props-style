import { StyleProps, ClassStyle } from "./styleProps.ts";

export interface CustomProps {
  [key: `attr:${string}`]: any;
}

export interface StyleVarProps {
  [key: `var:${string}`]: any;
}

export interface ComponentProps extends StyleProps, CustomProps, StyleVarProps {
  classStyle?: ClassStyle;
}
