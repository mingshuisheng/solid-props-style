import type { Properties } from "csstype";

type ExtendsPropertiesKeys =
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
  | "columnGap"
  | "rowGap"
  | "overflow"
  | "opacity"
  | "flexDirection"

export interface BaseProps extends Pick<Properties, ExtendsPropertiesKeys> {
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
  basis: Properties["flexBasis"]
}