import { createEffect, mergeProps, splitProps } from "solid-js";
import { css } from "../css";
import { styleKeys } from "./styleKeys.ts";
import { flow } from "./flow.ts";
import type { CSSObject } from "@emotion/serialize";
import { ExtendsPropsKeys } from "../types";
import { isProxy } from "./isSolidProxy.ts";

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

export function processVar<T>(props: T): T {
  createEffect(() => {
    const varKeys = Object.keys(props as any).filter((prop) =>
      prop.startsWith("var:")
    ) as `var:${string}`[];

    varKeys.forEach((key) => {
      const value = (props as any)[key];
      const selector = `[${key}="${value}"]`;
      if (insertedVar.has(selector)) {
        return;
      }
      insertedVar.add(selector);
      css({ [`${key.replace("var:", "--")}`]: value }, selector);
    });
  });

  return props;
}

const processStyleSelectors = flow<[string, string]>(
  processDark,
  processPseudoElement,
  processPseudoClass
);

const insertedStyle = new Set<string>();
function createCss(key: string, props: any) {
  const value = props[key];
  const selector: string =
    typeof value === "undefined" ? `[${key}]` : `[${key}="${value}"]`;
  const [_, realSelector] = processStyleSelectors([key, selector]);
  if (insertedStyle.has(realSelector)) {
    return;
  }
  insertedStyle.add(realSelector);
  let style = processStyle(key, value);
  try {
    css(style, realSelector);
  } catch (e) {
    console.error(e);
  }
}

function getStyleKeys(props: any): string[] {
  return Object.keys(props as any).filter(
    (key) => !key.includes("var:") && styleKeyReg.some((reg) => reg.test(key))
  );
}

const styleKeyReg = styleKeys.map((key) => RegExp(`^.*:${key}|${key}$`, "g"));
export function processStyleKeys<T>(props: T): T {
  if (isProxy(props)) {
    // if is Proxy need wrap keys
    createEffect(() => {
      getStyleKeys(props).forEach((key) => {
        createCss(key, props);
      });
    });
  } else {
    getStyleKeys(props).forEach((key) => {
      createEffect(() => {
        createCss(key, props);
      });
    });
  }

  return props;
}

function processDark([key, selector]: [string, string]): [string, string] {
  if (key.includes("dark")) {
    return [key, `.dark ${selector}`];
  }
  return [key, selector];
}

const pseudoClasses = ["hover", "focus"];
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
  fixed: { position: "fixed" },
  hFull: { height: "100%" },
  wFull: { width: "100%" },
  objectCover: { objectFit: "cover" },
  boxBorder: { boxSizing: "border-box" },
  boxContent: { boxSizing: "content-box" },
  itemsCenter: { alignItems: "center" },
  textCenter: { textAlign: "center" },
  justifyCenter: { justifyContent: "center" },
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
