import { JSX } from "solid-js/jsx-runtime";
import { generatorTag, wrapperComponentProps } from "../utils";

function tagWrapper(tagName: keyof JSX.HTMLElementTags) {
  return wrapperComponentProps(generatorTag(tagName));
}

export const A = tagWrapper("a");
export const Abbr = tagWrapper("abbr");
export const Address = tagWrapper("address");
export const Area = tagWrapper("area");
export const Article = tagWrapper("article");
export const Aside = tagWrapper("aside");
export const Audio = tagWrapper("audio");
export const B = tagWrapper("b");
export const Base = tagWrapper("base");
export const Bdi = tagWrapper("bdi");
export const Bdo = tagWrapper("bdo");
export const Blockquote = tagWrapper("blockquote");
export const Body = tagWrapper("body");
export const Br = tagWrapper("br");
export const Button = tagWrapper("button");
export const Canvas = tagWrapper("canvas");
export const Caption = tagWrapper("caption");
export const Cite = tagWrapper("cite");
export const Code = tagWrapper("code");
export const Col = tagWrapper("col");
export const Colgroup = tagWrapper("colgroup");
export const Data = tagWrapper("data");
export const Datalist = tagWrapper("datalist");
export const Dd = tagWrapper("dd");
export const Del = tagWrapper("del");
export const Details = tagWrapper("details");
export const Dfn = tagWrapper("dfn");
export const Dialog = tagWrapper("dialog");
export const Div = tagWrapper("div");
export const Dl = tagWrapper("dl");
export const Dt = tagWrapper("dt");
export const Em = tagWrapper("em");
export const Embed = tagWrapper("embed");
export const Fieldset = tagWrapper("fieldset");
export const Figcaption = tagWrapper("figcaption");
export const Figure = tagWrapper("figure");
export const Footer = tagWrapper("footer");
export const Form = tagWrapper("form");
export const H1 = tagWrapper("h1");
export const H2 = tagWrapper("h2");
export const H3 = tagWrapper("h3");
export const H4 = tagWrapper("h4");
export const H5 = tagWrapper("h5");
export const H6 = tagWrapper("h6");
export const Head = tagWrapper("head");
export const Header = tagWrapper("header");
export const Hgroup = tagWrapper("hgroup");
export const Hr = tagWrapper("hr");
export const Html = tagWrapper("html");
export const I = tagWrapper("i");
export const Iframe = tagWrapper("iframe");
export const Img = tagWrapper("img");
export const Input = tagWrapper("input");
export const Ins = tagWrapper("ins");
export const Kbd = tagWrapper("kbd");
export const Label = tagWrapper("label");
export const Legend = tagWrapper("legend");
export const Li = tagWrapper("li");
export const Link = tagWrapper("link");
export const Main = tagWrapper("main");
export const Map = tagWrapper("map");
export const Mark = tagWrapper("mark");
export const Menu = tagWrapper("menu");
export const Meta = tagWrapper("meta");
export const Meter = tagWrapper("meter");
export const Nav = tagWrapper("nav");
export const Noscript = tagWrapper("noscript");
export const Object = tagWrapper("object");
export const Ol = tagWrapper("ol");
export const Optgroup = tagWrapper("optgroup");
export const Option = tagWrapper("option");
export const Output = tagWrapper("output");
export const P = tagWrapper("p");
export const Picture = tagWrapper("picture");
export const Pre = tagWrapper("pre");
export const Progress = tagWrapper("progress");
export const Q = tagWrapper("q");
export const Rp = tagWrapper("rp");
export const Rt = tagWrapper("rt");
export const Ruby = tagWrapper("ruby");
export const S = tagWrapper("s");
export const Samp = tagWrapper("samp");
export const Script = tagWrapper("script");
export const Section = tagWrapper("section");
export const Select = tagWrapper("select");
export const Slot = tagWrapper("slot");
export const Small = tagWrapper("small");
export const Source = tagWrapper("source");
export const Span = tagWrapper("span");
export const Strong = tagWrapper("strong");
export const Style = tagWrapper("style");
export const Sub = tagWrapper("sub");
export const Summary = tagWrapper("summary");
export const Sup = tagWrapper("sup");
export const Table = tagWrapper("table");
export const Tbody = tagWrapper("tbody");
export const Td = tagWrapper("td");
export const Template = tagWrapper("template");
export const Textarea = tagWrapper("textarea");
export const Tfoot = tagWrapper("tfoot");
export const Th = tagWrapper("th");
export const Thead = tagWrapper("thead");
export const Time = tagWrapper("time");
export const Title = tagWrapper("title");
export const Tr = tagWrapper("tr");
export const Track = tagWrapper("track");
export const U = tagWrapper("u");
export const Ul = tagWrapper("ul");
export const Video = tagWrapper("video");
export const Wbr = tagWrapper("wbr");
