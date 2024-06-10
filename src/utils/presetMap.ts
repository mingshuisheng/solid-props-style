import { BoxSizing, Flex, ObjectFit, Overflow, Position, Size, UtilityPropsKeys } from "../types";
import type { CSSObject } from "@emotion/serialize";

type PresetMapValue = CSSObject;
type PresetMap<T extends keyof any> = Record<T, PresetMapValue>

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
  textCenter: { textAlign: "center" },
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

export const presetMap: Record<UtilityPropsKeys, PresetMapValue> = {
  ...objectFitMap,
  ...positionMap,
  ...sizeMap,
  ...boxSizingMap,
  ...flexMap,
  ...overflowMap,
};
