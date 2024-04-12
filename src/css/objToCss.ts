import { serialize, compile, middleware, stringify, prefixer } from "stylis";
import { serializeStyles, type CSSObject } from "@emotion/serialize";
import {toEscapedSelector} from "./escapedSelector"

const serializer = middleware([prefixer, stringify]);
export function objToCss(style: CSSObject, selector?: string) {
  const serialized = serializeStyles([style], {}, undefined);
  selector = selector ?? `.css-${serialized.name}`;
  const elements = compile(`${toEscapedSelector(selector)}{${serialized.styles}}`);

  return {
    key: selector,
    styles: serialize(elements, serializer),
  };
}
