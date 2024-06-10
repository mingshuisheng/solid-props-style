import { StyleProps } from "./styleProps.ts";
import type { CSSObject } from "@emotion/serialize";

export interface CustomProps {
  [key: `attr:${string}`]: any;
}

export interface StyleVarProps {
  [key: `var:${string}`]: any;
}

export interface ComponentProps extends StyleProps, CustomProps, StyleVarProps {
  classStyle?: CSSObject;
}
