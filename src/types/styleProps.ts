import type { CSSPropertiesWithMultiValues, CSSObject } from "@emotion/serialize"

export interface ClassStyle extends CSSObject {

}

export interface StyleProps extends CSSPropertiesWithMultiValues{}

export type StylePropName = keyof StyleProps
