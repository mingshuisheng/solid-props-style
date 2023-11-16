import {JSX} from "solid-js";
import {ComponentProps} from "../../types/componentProps.ts";
import {processClass} from "../../utils/processClass.ts";

export interface DivProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, keyof JSX.CSSProperties>, ComponentProps {
}

export function Div(props: DivProps) {
  let other: JSX.HTMLAttributes<HTMLDivElement> = processClass(props)

  return (
    <div {...other}/>
  )
}
