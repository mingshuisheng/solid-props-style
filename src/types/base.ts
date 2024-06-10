import type { Properties } from "csstype";

type ExtendsPropertieKeys =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "inset"
  | "order"
  | "userSelect"
  | "objectFit"
  | "boxSizing"
  | "transition"
  | "transform"
  | "filter"
  | "cursor"
  | "gap"

export interface BaseProps extends Pick<Properties, ExtendsPropertieKeys> {
  d: Properties["display"];
  h: Properties["height"];
  w: Properties["width"];
  c: Properties["color"];
  bg: Properties["backgroundColor"];
  z: Properties["zIndex"];
  p: Properties["padding"];
  m: Properties["margin"];
  b: Properties["border"];
  br: Properties["borderRadius"];
  shadow: Properties["boxShadow"];
}