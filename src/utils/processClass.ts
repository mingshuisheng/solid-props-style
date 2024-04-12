import {createEffect, mergeProps, splitProps} from "solid-js";
import {css} from "../css";
// import {css} from "@emotion/css";
import {styleKeys} from "./defaultStyleProps";
import {flow} from "./flow.ts";
import type {CSSObject} from "@emotion/serialize";

export function processClassStyle<T>(props: T): T {
  const [classProps, otherProps] = splitProps(props as any, [
    "classList",
    "classStyle",
  ]);
  const propStyleToClass = () => {
    if (!classProps.classStyle) {
      return classProps.classList;
    }
    let classList = {...classProps.classList} as any;
    const keys = Object.keys(classProps.classStyle);

    keys.forEach((key) => {
      let className = css({
        [key]: classProps.classStyle[key],
      }).replace(".", "");
      classList[className] = true;
    });
    return classList;
  };

  return mergeProps(otherProps, {
    get classList() {
      return propStyleToClass();
    },
  }) as any;
}

const insertedVar = new Set<string>()

export function processVar<T>(props: T): T {
  createEffect(() => {
    const varKeys = Object.keys(props as any).filter((prop) =>
      prop.startsWith("var:")
    ) as `var:${string}`[];

    varKeys.forEach((key) => {
      const value = (props as any)[key];
      const selector = `[${key}="${value}"]`
      if (insertedVar.has(selector)) {
        return
      }
      insertedVar.add(selector)
      css({[`${key.replace("var:", "--")}`]: value}, selector);
    });
  });

  return props;
}

const processStyleSelectors = flow<[string, string]>(processDark, processHover);

const insertedStyle = new Set<string>()

export function processStyleKeys<T>(props: T): T {
  createEffect(() => {
    const keys = Object.keys(props as any).filter((key) =>
      styleKeys.includes(key as any)
    );
    keys.forEach((key) => {
      const value = (props as any)[key];
      const selector: string = typeof value === "undefined" ? `[${key}]` : `[${key}="${value}"]`;
      const [_, realSelector] = processStyleSelectors([key, selector]);
      if (insertedStyle.has(realSelector)) {
        return
      }
      insertedStyle.add(realSelector)
      let style = processStyle(key, value)
      css(style, realSelector);
    });
  });
  return props;
}

function processDark([key, selector]: [string, string]): [string, string] {
  if (key.includes("dark:")) {
    return [key, `.dark ${selector}`];
  }
  return [key, selector];
}

function processHover([key, selector]: [string, string]): [string, string] {
  if (key.includes("hover:")) {
    return [key, `${selector}:hover`];
  }
  return [key, selector];
}

const attrMap: Record<string, string> = {
  d: "display",
  h: "height",
  w: "width",
  c: "color",
  bg: "backgroundColor"
}

const presetMap: Record<string, CSSObject> = {
  flex: {display: "flex"},
  flexCol: {flexDirection: "column"},
  flexRow: {flexDirection: "row"}
}

function processStyle(key: string, value: any): CSSObject {
  const keys = key.split(":");
  let attr = keys[keys.length - 1];
  attr = attrMap[attr] ?? attr

  return presetMap[attr] ?? {
    [`${attr}`]: value
  }
}
