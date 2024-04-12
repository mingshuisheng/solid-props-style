import { serializeStyles, type CSSObject } from "@emotion/serialize";

export function objToKeyframes(keyframe: CSSObject, keyframeName?: string) {
  const serialized = serializeStyles([keyframe], {}, undefined);
  keyframeName = keyframeName ?? `animation-${serialized.name}`;
  return {
    key: keyframeName,
    styles: `@keyframes ${keyframeName}{${serialized.styles}}`,
  };
}
