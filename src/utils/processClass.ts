import {JSX, mergeProps, splitProps} from "solid-js";
import {CSSObject} from "@emotion/serialize";
import {css} from "@emotion/css";
import {styleKeys} from "./defaultStyleProps.ts";

export function processClass<EL extends any>(props: any): JSX.HTMLAttributes<EL> {
  const [styleProps, classList, other] = splitProps(props, styleKeys, ["classList", "class", "classStyle"])

  const propStyleToClass = () => {
    let targetStyle: CSSObject = {
      ...styleProps,
      ...classList.classList,
    }

    let className = css(targetStyle)
    return {...classList.classList, [`${className}`]: true}
  }

  return mergeProps(other, {
    get classList() {
      return propStyleToClass()
    },
    get "class"() {
      return
    }
  }) as JSX.HTMLAttributes<EL>
}
