import type { BaseProps } from "./base";
import type { UtilityProps } from "./utility";
import type { Properties } from "csstype";


type Combination<T extends string[]> = Exclude<AllCombs<T>, "" | `${string}-`>;
type AllCombs<T extends string[]> = T extends [
  infer F extends string,
  ...infer R extends string[]
]
  ? F | `${F}-${AllCombs<R>}` | AllCombs<R>
  : "";

type PseudoPrefix = Combination<["dark", "hover", "focus", "active", "before" | "after"]>;

type AttributifyNames<K extends string> = K | `${PseudoPrefix}:${K}`;

export interface CombineProps extends BaseProps, UtilityProps { }

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
