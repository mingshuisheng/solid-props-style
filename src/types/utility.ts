export type ObjectFit =
  | "objectCover"

export type Position =
  | "static"
  | "absolute"
  | "relative"
  | "sticky"
  | "fixed"

export type Size =
  | "wFull"
  | "hFull"

export type BoxSizing =
  | "boxBorder"
  | "boxContent"

export type Flex =
  | "flex"
  | "flexCol"
  | "flexRow"
  | "itemsCenter"
  | "textCenter"
  | "justifyNormal"
  | "justfyStart"
  | "justfyEnd"
  | "justifyCenter"
  | "justfyBetween"
  | "justfyAround"
  | "justfyEvenly"
  | "justfyStretch"
  | "flex1"

export type Overflow =
  | "overflowAuto"
  | "overflowHidden"
  | "overflowClip"
  | "overflowVisible"
  | "overflowScroll"
  | "overflowXAuto"
  | "overflowYAuto"
  | "overflowXHidden"
  | "overflowYHidden"
  | "overflowXClip"
  | "overflowYClip"
  | "overflowXVisible"
  | "overflowYVisible"
  | "overflowXScroll"
  | "overflowYScroll"

export type UtilityBooleanKeys =
  | ObjectFit
  | Position
  | Size
  | BoxSizing
  | Flex
  | Overflow


export interface UtilityProps extends Record<UtilityBooleanKeys, boolean> { }
export type UtilityPropsKeys = keyof UtilityProps;