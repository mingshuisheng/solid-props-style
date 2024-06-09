import { mergeProps, splitProps, $PROXY } from "solid-js";
import { css } from "../css";
import { styleKeys } from "./styleKeys.ts";
import { flow } from "./flow.ts";
import type { CSSObject } from "@emotion/serialize";
import { ExtendsPropsKeys } from "../types";
import hashString from "@emotion/hash";

export function processClassStyle<T>(props: T): T {
  const [classProps, otherProps] = splitProps(props as any, [
    "classList",
    "classStyle",
  ]);
  const propStyleToClass = () => {
    if (!classProps.classStyle) {
      return classProps.classList;
    }
    let classList = { ...classProps.classList } as any;
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

const insertedVar = new Set<string>();
function createVarCss(key: string, realValue: any): any {
  const selectorValue = typeof realValue === "boolean" ? realValue : "css-" + hashString(JSON.stringify(realValue))
  const selector = `[${key}="${selectorValue}"]`;
  if (insertedVar.has(selector)) {
    return selectorValue;
  }
  insertedVar.add(selector);
  try {
    css({ [`${key.replace("var:", "--")}`]: realValue }, selector);
  } catch (e) {
    console.error(e);
  }
  return selectorValue
}

export function processVar<T>(props: T): T {
  const propsRef = props as any
  return createPropsProxy(props, {
    get(_, key) {
      if (key === $PROXY) {
        return propsRef
      }
      return typeof key === "string" && key.includes("var:") ? createVarCss(key, propsRef[key]) : propsRef[key]
    },
  })
}

const processStyleSelectors = flow<[string, string]>(
  processDark,
  processPseudoElement,
  processPseudoClass
);

const insertedStyle = new Set<string>();
function createCss(key: string, realValue: any): any {
  const selectorValue = typeof realValue === "boolean" ? realValue : "css-" + hashString(typeof realValue === "undefined" ? "undefined" : JSON.stringify(realValue))
  const selector: string = `[${key}="${selectorValue}"]`;
  const [_, realSelector] = processStyleSelectors([key, selector]);
  if (insertedStyle.has(realSelector)) {
    return selectorValue;
  }
  insertedStyle.add(realSelector);
  let style = processStyle(key, realValue);
  try {
    css(style, realSelector);
  } catch (e) {
    console.error(e);
  }

  return selectorValue
}

const styleKeyReg = styleKeys.map((key) => RegExp(`^(.+:${key}|${key}$)`));
const isStyleKey = (key: string) => styleKeyReg.some((reg) => reg.test(key))

export function processStyleKeys<T>(props: T): T {
  const propsRef = props as any
  return createPropsProxy(props, {
    get(_, key) {
      if (key === $PROXY) {
        return propsRef
      }

      return typeof key === "string" && !key.includes("var:") && isStyleKey(key) ? createCss(key, propsRef[key]) : propsRef[key]
    },
  })
}

function processDark([key, selector]: [string, string]): [string, string] {
  if (key.includes("dark")) {
    return [key, `.dark ${selector}`];
  }
  return [key, selector];
}

const pseudoClasses = ["hover", "focus", "active"];
function processPseudoClass([key, selector]: [string, string]): [
  string,
  string
] {
  for (const pseudoClass of pseudoClasses) {
    if (key.includes(pseudoClass)) {
      selector = `${selector}:${pseudoClass}`;
    }
  }
  return [key, selector];
}

const pseudoElements = ["before", "after"];

function processPseudoElement([key, selector]: [string, string]): [
  string,
  string
] {
  for (const pseudoElement of pseudoElements) {
    if (key.includes(pseudoElement)) {
      selector = `${selector}::${pseudoElement}`;
    }
  }
  return [key, selector];
}

const attrMap: Record<string, string> = {
  d: "display",
  h: "height",
  w: "width",
  c: "color",
  bg: "backgroundColor",
  p: "padding",
  m: "margin",
  b: "border",
  br: "borderRadius",
  shadow: "boxShadow",
};

const valueMap: Record<string, string> = {
  full: "100%",
};

const presetMap: Record<ExtendsPropsKeys, CSSObject> = {
  flex: { display: "flex" },
  flexCol: { flexDirection: "column" },
  flexRow: { flexDirection: "row" },
  relative: { position: "relative" },
  absolute: { position: "absolute" },
  sticky: { position: "sticky" },
  fixed: { position: "fixed" },
  hFull: { height: "100%" },
  wFull: { width: "100%" },
  objectCover: { objectFit: "cover" },
  boxBorder: { boxSizing: "border-box" },
  boxContent: { boxSizing: "content-box" },
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
};

function processStyle(key: string, value: any): CSSObject {
  const keys = key.split(":");
  let attr = keys[keys.length - 1];
  attr = attrMap[attr] ?? attr;

  return (
    presetMap[attr as ExtendsPropsKeys] ?? {
      [`${attr}`]: valueMap[value] ?? value,
    }
  );
}

const trueFn = () => true
function createPropsProxy(props: any, handler: ProxyHandler<any> = {}): any {
  return new Proxy({}, Object.assign({
    get(_, key) {
      if (key === $PROXY) {
        return props
      }

      return props
    },
    has(_, key) {
      if (key === $PROXY) return true;
      return key in props
    },
    set: trueFn,
    deleteProperty: trueFn,
    getOwnPropertyDescriptor(_, key) {
      return {
        configurable: true,
        enumerable: true,
        get() {
          return props[key]
        },
        set: trueFn,
        deleteProperty: trueFn
      }
    },
    ownKeys() {
      return Object.keys(props)
    }
  } as ProxyHandler<any>, handler))
}