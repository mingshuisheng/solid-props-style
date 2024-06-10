import { BoxSizing, Flex, MarginUtility, ObjectFit, Overflow, PaddingUtility, Position, Size, TextAlign, UtilityPropsKeys } from "../types";
import type { CSSObject } from "@emotion/serialize";
import { valueToArr } from "./tupleUtils";

type PresetMapValue<V> = CSSObject | ((value: V) => CSSObject);
type PresetMap<T> = {
  [P in keyof T]: PresetMapValue<T[P]>;
}

export const objectFitMap: PresetMap<ObjectFit> = {
  objectCover: { objectFit: "cover" },
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

export const flexMap: PresetMap<Flex> = {
  flex: { display: "flex" },
  flexCol: { flexDirection: "column" },
  flexRow: { flexDirection: "row" },
  itemsCenter: { alignItems: "center" },
  justifyNormal: { justifyContent: "normal" },
  justfyStart: { justifyContent: "flex-start" },
  justfyEnd: { justifyContent: "flex-end" },
  justifyCenter: { justifyContent: "center" },
  justfyBetween: { justifyContent: "space-between" },
  justfyAround: { justifyContent: "space-around" },
  justfyEvenly: { justifyContent: "space-evenly" },
  justfyStretch: { justifyContent: "stretch" },
  flex1: { flex: 1 },
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

export const margin: PresetMap<MarginUtility> = {
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

export const padding: PresetMap<PaddingUtility> = {
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

export const presetMap: Record<UtilityPropsKeys, PresetMapValue<any>> = {
  ...objectFitMap,
  ...positionMap,
  ...sizeMap,
  ...boxSizingMap,
  ...flexMap,
  ...overflowMap,
  ...textAlign,
  ...margin,
  ...padding
};
