import type {CSSObject} from "@emotion/serialize"
import {Properties} from "csstype"

export interface ClassStyle extends CSSObject {

}

// export type PseudoPrefix =
//   'active'
//   | 'before'
//   | 'after'
//   | 'dark'
//   | 'light'
//   | 'first'
//   | 'last'
//   | 'focus'
//   | 'hover'
//   | 'link'
//   | 'root'
//   | 'sm'
//   | 'md'
//   | 'lg'
//   | 'xl'
//   | '2xl'
//   | 'enabled'
//   | 'disabled'
//   | 'all'
//   | 'children';

export interface BaseProps {
  d: Properties["display"]
  h: Properties["height"] | "full"
  w: Properties["width"] | "full",
  c: Properties["color"]
  userSelect: Properties["userSelect"]
  bg: Properties["backgroundColor"]
}

export interface ExtendsProps {
  flex: boolean
  flexCol: boolean
  flexRow: boolean
}

type PseudoPrefix = "dark:" | "hover:" | "dark:hover:"

type AttributifyNames<K extends string> = K | `${PseudoPrefix}${K}`

export interface CombineProps extends BaseProps,ExtendsProps{}

export type StyleProps = {
  [K in keyof CombineProps as AttributifyNames<K>]?: CombineProps[K]
}


const value: StyleProps = {
  "dark:flex": true
}

console.log(value)


export type StylePropName = keyof StyleProps
