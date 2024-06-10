import { flow } from "./flow.ts";
import { UtilityPropsKeys } from "../types";
import hashString from "@emotion/hash";
import { CSSObject } from "@emotion/serialize";
import { presetMap } from "./presetMap";
import { attrMap } from "./attrMap.ts";
import { css } from "../css";

const processStyleSelectors = flow<[string, string]>(
  processDark,
  processPseudoElement,
  processPseudoClass
);

const insertedStyle = new Set<string>();
export function createCss(key: string, realValue: any): any {
  const selectorValue = typeof realValue === "boolean" ? realValue
    : "css-" + hashString(typeof realValue === "undefined" ? "undefined" : JSON.stringify(realValue))

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

const presetMapKeys = Object.keys(presetMap)

function processStyle(key: string, value: any): CSSObject {
  const keys = key.split(":");
  let attr = keys[keys.length - 1];
  attr = attrMap[attr] ?? attr;

  if (presetMapKeys.includes(key)) {
    const preset = presetMap[key as UtilityPropsKeys];
    return (typeof preset === "function") ? preset(value) : preset
  } else {
    return {
      [`${attr}`]: value,
    }
  }
}