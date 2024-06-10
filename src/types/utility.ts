export type SizeType = number | string;

export type ObjectFit = Record<
  | "objectCover"
  , boolean>


export type Position = Record<
  | "static"
  | "absolute"
  | "relative"
  | "sticky"
  | "fixed"
  , boolean>


export type Size = Record<
  | "wFull"
  | "hFull"
  , boolean>

export type BoxSizing = Record<
  | "boxBorder"
  | "boxContent"
  , boolean>

export type Flex = Record<
  | "flex"
  | "flexCol"
  | "flexRow"
  | "itemsCenter"
  | "justifyNormal"
  | "justfyStart"
  | "justfyEnd"
  | "justifyCenter"
  | "justfyBetween"
  | "justfyAround"
  | "justfyEvenly"
  | "justfyStretch"
  | "flex1"
  , boolean>

export type Overflow = Record<
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
  , boolean>

export type TextAlign = Record<
  | "textStart"
  | "textEnd"
  | "textCenter"
  | "textJustify"
  , boolean>


export type MarginUtility = {
  mx: SizeType | [SizeType, SizeType]
  ml: SizeType
  mr: SizeType
  my: SizeType | [SizeType, SizeType]
  mt: SizeType
  mb: SizeType
}

export type PaddingUtility = {
  px: SizeType | [SizeType, SizeType]
  pl: SizeType
  pr: SizeType
  py: SizeType | [SizeType, SizeType]
  pt: SizeType
  pb: SizeType
}

export type InnerUtilityProps = ObjectFit
  & Position & Size & BoxSizing & Flex
  & Overflow & TextAlign & MarginUtility & PaddingUtility

export interface UtilityProps extends InnerUtilityProps { }
export type UtilityPropsKeys = keyof UtilityProps;