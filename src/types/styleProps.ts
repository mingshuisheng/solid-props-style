import type { CSSObject } from "@emotion/serialize";
import { Properties } from "csstype";

export interface ClassStyle extends CSSObject {}

export interface BaseProps {
  d: Properties["display"];
  h: Properties["height"] | "full";
  w: Properties["width"] | "full";
  c: Properties["color"];
  userSelect: Properties["userSelect"];
  bg: Properties["backgroundColor"];
  z: Properties["zIndex"];
  objectFit: Properties["objectFit"];
  boxSizing: Properties["boxSizing"];
  transition: Properties["transition"];
  transform: Properties["transform"];
  filter: Properties["filter"];
  p: Properties["padding"];
  m: Properties["margin"];
  cursor: Properties["cursor"];
  gap: Properties["gap"];
  b: Properties["border"];
  br: Properties["borderRadius"];
  shadow: Properties["boxShadow"];
}

export type ExtendsBooleanKeys =
  | "flex"
  | "flexCol"
  | "flexRow"
  | "relative"
  | "absolute"
  | "fixed"
  | "hFull"
  | "wFull"
  | "objectCover"
  | "boxBorder"
  | "boxContent"
  | "itemsCenter"
  | "textCenter"
  | "justifyCenter";

export interface ExtendsProps extends Record<ExtendsBooleanKeys, boolean> {}
export type ExtendsPropsKeys = keyof ExtendsProps;

type Combination<T extends string[]> = Exclude<AllCombs<T>, "" | `${string}-`>;
type AllCombs<T extends string[]> = T extends [
  infer F extends string,
  ...infer R extends string[]
]
  ? F | `${F}-${AllCombs<R>}` | AllCombs<R>
  : "";

type PseudoPrefix = Combination<["dark", "hover", "focus", "before" | "after"]>;

type AttributifyNames<K extends string> = K | `${PseudoPrefix}:${K}`;

export interface CombineProps extends BaseProps, ExtendsProps {}

export type StyleProps = {
  [K in keyof CombineProps as AttributifyNames<K>]?: CombineProps[K];
} & Partial<
  //add content prop only for before and after
  Record<
    Extract<
      AttributifyNames<"content">,
      `${string}before${string}` | `${string}after${string}`
    >,
    Properties["content"]
  >
>;

export type StylePropName = keyof StyleProps;
