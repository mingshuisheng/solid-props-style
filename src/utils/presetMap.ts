import { AlignContent, AlignItems, AlignSelf, BoxSizing, Display, Flex, FlexDirection, FlexGrow, FlexShrink, FlexWrap, JustifyContent, JustifyItems, JustifySelf, MarginUtility, ObjectFit, Overflow, PaddingUtility, Position, Size, TextAlign, UtilityPropsKeys } from "../types";
import type { CSSObject } from "@emotion/serialize";
import { valueToArr } from "./tupleUtils";

type PresetMapValue<V> = CSSObject | ((value: V) => CSSObject);
type PresetMap<T> = {
  [P in keyof T]: PresetMapValue<T[P]>;
}

export const displayMap: PresetMap<Display> = {
  block: { display: "block" },
  inlineBlock: { display: "inline-block" },
  inline: { display: "inline" },
  flex: { display: "flex" },
  inlineFlex: { display: "inline-flex" },
  table: { display: "table" },
  inlineTable: { display: "inline-table" },
  tableCaption: { display: "table-caption" },
  tableCell: { display: "table-cell" },
  tableColumn: { display: "table-column" },
  tableColumnGroup: { display: "table-column-group" },
  tableFooterGroup: { display: "table-footer-group" },
  tableHeaderGroup: { display: "table-header-group" },
  tableRowGroup: { display: "table-row-group" },
  tableRow: { display: "table-row" },
  flowRoot: { display: "flow-root" },
  grid: { display: "grid" },
  inlineGrid: { display: "inline-grid" },
  contents: { display: "contents" },
  listItem: { display: "list-item" },
  hidden: { display: "none" }
}

export const objectFitMap: PresetMap<ObjectFit> = {
  objectContain: { objectFit: "contain" },
  objectCover: { objectFit: "cover" },
  objectFill: { objectFit: "fill" },
  objectNone: { objectFit: "none" },
  objectScaleDown: { objectFit: "scale-down" }
}

export const positionMap: PresetMap<Position> = {
  static: { position: "static" },
  absolute: { position: "absolute" },
  relative: { position: "relative" },
  sticky: { position: "sticky" },
  fixed: { position: "fixed" }
}

export const sizeMap: PresetMap<Size> = {
  hFull: { height: "100%" },
  wFull: { width: "100%" },
}

export const boxSizingMap: PresetMap<BoxSizing> = {
  boxBorder: { boxSizing: "border-box" },
  boxContent: { boxSizing: "content-box" },
}

export const flexDirectionMap: PresetMap<FlexDirection> = {
  flexRow: { flexDirection: "row" },
  flexRowReverse: { flexDirection: "row-reverse" },
  flexCol: { flexDirection: "column" },
  flexColReverse: { flexDirection: "column-reverse" }
}

export const flexWrapMap: PresetMap<FlexWrap> = {
  flexWrap: { flexWrap: "wrap" },
  flexWrapReverse: { flexWrap: "wrap-reverse" },
  flexNowrap: { flexWrap: "nowrap" }
}

export const flexMap: PresetMap<Flex> = {
  flex1: { flex: "1 1 0%" },
  flexAuto: { flex: "1 1 auto" },
  flexInitial: { flex: "0 1 auto" },
  flexNone: { flex: "none" }
}

export const flexGrow: PresetMap<FlexGrow> = {
  grow: { flexGrow: 1 },
  grow0: { flexGrow: 0 }
}

export const flexShrink: PresetMap<FlexShrink> = {
  shrink: { flexShrink: 1 },
  shrink0: { flexShrink: 0 }
}

export const justifyContentMap: PresetMap<JustifyContent> = {
  justifyNormal: { justifyContent: "normal" },
  justifyStart: { justifyContent: "flex-start" },
  justifyEnd: { justifyContent: "flex-end" },
  justifyCenter: { justifyContent: "center" },
  justifyBetween: { justifyContent: "space-between" },
  justifyAround: { justifyContent: "space-around" },
  justifyEvenly: { justifyContent: "space-evenly" },
  justifyStretch: { justifyContent: "stretch" }
}

export const justifyItemsMap: PresetMap<JustifyItems> = {
  justifyItemsStart: { justifyItems: "start" },
  justifyItemsEnd: { justifyItems: "end" },
  justifyItemsCenter: { justifyItems: "center" },
  justifyItemsStretch: { justifyItems: "stretch" }
}

export const justifySelfMap: PresetMap<JustifySelf> = {
  justifySelfAuto: { justifySelf: "auto" },
  justifySelfStart: { justifySelf: "start" },
  justifySelfEnd: { justifySelf: "end" },
  justifySelfCenter: { justifySelf: "center" },
  justifySelfStretch: { justifySelf: "stretch" }
}

export const alignContentMap: PresetMap<AlignContent> = {
  contentNormal: { alignContent: "normal" },
  contentCenter: { alignContent: "center" },
  contentStart: { alignContent: "flex-start" },
  contentEnd: { alignContent: "flex-end" },
  contentBetween: { alignContent: "space-between" },
  contentAround: { alignContent: "space-around" },
  contentEvenly: { alignContent: "space-evenly" },
  contentBaseline: { alignContent: "baseline" },
  contentStretch: { alignContent: "stretch" }
}

export const alignItemsMap: PresetMap<AlignItems> = {
  itemsStart: { alignItems: "flex-start" },
  itemsEnd: { alignItems: "flex-end" },
  itemsCenter: { alignItems: "center" },
  itemsBaseline: { alignItems: "baseline" },
  itemsStretch: { alignItems: "stretch" }
}

export const alignSelfMap: PresetMap<AlignSelf> = {
  selfAuto: { alignSelf: "auto" },
  selfStart: { alignSelf: "flex-start" },
  selfEnd: { alignSelf: "flex-end" },
  selfCenter: { alignSelf: "center" },
  selfStretch: { alignSelf: "stretch" },
  selfBaseLine: { alignSelf: "baselines" }
}

export const overflowMap: PresetMap<Overflow> = {
  overflowAuto: { overflow: "auto" },
  overflowHidden: { overflow: "hidden" },
  overflowClip: { overflow: "clip" },
  overflowVisible: { overflow: "visible" },
  overflowScroll: { overflow: "scroll" },
  overflowXAuto: { overflowX: "auto" },
  overflowYAuto: { overflowY: "auto" },
  overflowXHidden: { overflowX: "hidden" },
  overflowYHidden: { overflowY: "hidden" },
  overflowXClip: { overflowX: "clip" },
  overflowYClip: { overflowY: "clip" },
  overflowXVisible: { overflowX: "visible" },
  overflowYVisible: { overflowY: "visible" },
  overflowXScroll: { overflowX: "scroll" },
  overflowYScroll: { overflowY: "scroll" }
}

export const textAlign: PresetMap<TextAlign> = {
  textJustify: { textAlign: "justify" },
  textStart: { textAlign: "start" },
  textEnd: { textAlign: "end" },
  textCenter: { textAlign: "center" }
}

export const marginMap: PresetMap<MarginUtility> = {
  mx: (mx) => {
    let [marginLeft, marginRight] = valueToArr(mx)
    return { marginLeft, marginRight }
  },
  ml: (marginLeft) => ({ marginLeft }),
  mr: (marginRight) => ({ marginRight }),
  my: (my) => {
    let [marginTop, marginBottom] = valueToArr(my)
    return { marginTop, marginBottom }
  },
  mt: (marginTop) => ({ marginTop }),
  mb: (marginBottom) => ({ marginBottom }),
}

export const paddingMap: PresetMap<PaddingUtility> = {
  px: (px) => {
    let [paddingLeft, paddingRight] = valueToArr(px)
    return { paddingLeft, paddingRight }
  },
  pl: (paddingLeft) => ({ paddingLeft }),
  pr: (paddingRight) => ({ paddingRight }),
  py: (py) => {
    let [paddingTop, paddingBottom] = valueToArr(py)
    return { paddingTop, paddingBottom }
  },
  pt: (paddingTop) => ({ paddingTop }),
  pb: (paddingBottom) => ({ paddingBottom }),
}

export const presetMap: Record<UtilityPropsKeys, PresetMapValue<any>> = Object.assign({},
  displayMap,
  objectFitMap,
  positionMap,
  sizeMap,
  boxSizingMap,
  flexDirectionMap,
  flexWrapMap,
  flexMap,
  flexGrow,
  flexShrink,
  justifyContentMap,
  justifyItemsMap,
  justifySelfMap,
  alignContentMap,
  alignItemsMap,
  alignSelfMap,
  overflowMap,
  textAlign,
  marginMap,
  paddingMap
)
