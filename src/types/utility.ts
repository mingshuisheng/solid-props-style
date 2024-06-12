export type SizeType = number | string;
export type BooleanProps<T extends string> = Record<T, boolean>

export type Display = BooleanProps<
  | "block"
  | "inlineBlock"
  | "inline"
  | "flex"
  | "inlineFlex"
  | "table"
  | "inlineTable"
  | "tableCaption"
  | "tableCell"
  | "tableColumn"
  | "tableColumnGroup"
  | "tableFooterGroup"
  | "tableHeaderGroup"
  | "tableRowGroup"
  | "tableRow"
  | "flowRoot"
  | "grid"
  | "inlineGrid"
  | "contents"
  | "listItem"
  | "hidden"
>

export type ObjectFit = BooleanProps<
  | "objectContain"
  | "objectCover"
  | "objectFill"
  | "objectNone"
  | "objectScaleDown"
>


export type Position = BooleanProps<
  | "static"
  | "absolute"
  | "relative"
  | "sticky"
  | "fixed"
>


export type Size = BooleanProps<
  | "wFull"
  | "hFull"
>

export type BoxSizing = BooleanProps<
  | "boxBorder"
  | "boxContent"
>

export type FlexDirection = BooleanProps<
  | "flexRow"
  | "flexRowReverse"
  | "flexCol"
  | "flexColReverse"
>

export type FlexWrap = BooleanProps<
  | "flexWrap"
  | "flexWrapReverse"
  | "flexNowrap"
>

export type Flex = BooleanProps<
  | "flex1"
  | "flexAuto"
  | "flexInitial"
  | "flexNone"
>

export type FlexGrow = BooleanProps<
  | "grow"
  | "grow0"
>

export type FlexShrink = BooleanProps<
  | "shrink"
  | "shrink0"
>

export type JustifyContent = BooleanProps<
  | "justifyNormal"
  | "justifyStart"
  | "justifyEnd"
  | "justifyCenter"
  | "justifyBetween"
  | "justifyAround"
  | "justifyEvenly"
  | "justifyStretch"
>

export type JustifyItems = BooleanProps<
  | "justifyItemsStart"
  | "justifyItemsEnd"
  | "justifyItemsCenter"
  | "justifyItemsStretch"
>

export type JustifySelf = BooleanProps<
  | "justifySelfAuto"
  | "justifySelfStart"
  | "justifySelfEnd"
  | "justifySelfCenter"
  | "justifySelfStretch"
>

export type AlignContent = BooleanProps<
  | "contentNormal"
  | "contentCenter"
  | "contentStart"
  | "contentEnd"
  | "contentBetween"
  | "contentAround"
  | "contentEvenly"
  | "contentBaseline"
  | "contentStretch"
>

export type AlignItems = BooleanProps<
  | "itemsStart"
  | "itemsEnd"
  | "itemsCenter"
  | "itemsBaseline"
  | "itemsStretch"
>

export type AlignSelf = BooleanProps<
  | "selfAuto"
  | "selfStart"
  | "selfEnd"
  | "selfCenter"
  | "selfStretch"
  | "selfBaseLine"
>

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

export type InnerUtilityProps =
  Display & ObjectFit & Position & Size & BoxSizing
  & FlexDirection & FlexWrap & Flex & FlexGrow & FlexShrink
  & JustifyContent & JustifyItems & JustifySelf
  & AlignContent & AlignItems & AlignSelf
  & Overflow & TextAlign & MarginUtility & PaddingUtility

export interface UtilityProps extends InnerUtilityProps { }
export type UtilityPropsKeys = keyof UtilityProps;