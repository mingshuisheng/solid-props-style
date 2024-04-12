import { objToCss } from "./objToCss";
import { objToKeyframes } from "./objToKeyframes";
import { StyleSheet } from "@emotion/sheet";
import hashString from "@emotion/hash";
import { type CSSObject } from "@emotion/serialize";

const styleSheet = new StyleSheet({ key: "css", container: document.head });

const insertedStyles = new Set<string>();
function css(style: CSSObject, selector?: string) {
  const styles = objToCss(style, selector);
  const stylesHash = hashString(styles.styles);
  if (insertedStyles.has(stylesHash)) {
    return styles.key;
  }
  insertedStyles.add(stylesHash);
  styleSheet.insert(styles.styles);
  return styles.key;
}

const insertedKeyframe = new Set<string>();
function keyframes(keyframe: CSSObject, keyframeName?: string) {
  const keyframeObj = objToKeyframes(keyframe, keyframeName);

  const keyframeHash = hashString(keyframeObj.styles);
  if (insertedKeyframe.has(keyframeHash)) {
    return;
  }
  insertedKeyframe.add(keyframeHash);
  styleSheet.insert(keyframeObj.styles);
  return keyframeObj.key;
}

export { css, keyframes, objToKeyframes, objToCss };
