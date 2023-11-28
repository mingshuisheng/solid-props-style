import { JSX } from "solid-js/jsx-runtime";
import { Dynamic } from "solid-js/web";

export function generatorTag<T extends keyof JSX.HTMLElementTags>(
  tagName: T
): (props: JSX.HTMLElementTags[T]) => JSX.Element {
  return (props: JSX.HTMLElementTags[T]) => {
    return <Dynamic component={tagName} {...props} />;
  };
}
