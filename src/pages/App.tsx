import { Button, Div, Input } from "../components";
import { createSignal, splitProps } from "solid-js";
import "./app.css";
import { ComponentProps } from "../types";

const MyCom = (props: { text: string } & ComponentProps) => {
  const [text, other] = splitProps(props, ["text"]);

  return <Div {...other}>{text.text}</Div>;
};

function App() {
  const [color, setColor] = createSignal("red");
  const [show, _] = createSignal(true);

  const [otherProps, setOtherProps] = createSignal<Parameters<typeof Div>[0]>(
    {}
  );

  return (
    <Div
      mt={100}
      class="ppp tttt"
      flex
      flexCol
      itemsCenter
      // display="flex"
      c={color()}
      onClick={() => setColor((pre) => (pre === "red" ? "white" : "red"))}
      classList={{ ooo: show() }}
      userSelect="none"
      bg="green"
      dark-hover:bg="blue"
      attr:oo="ttt"
      attr:icc="ppp"
    >
      <Button
        cursor="pointer"
        onClick={undefined}
        onMouseDown={undefined}
        onMouseUp={undefined}
      >
        123
      </Button>
      qqq
      <Input
        c="green"
        value="1adsfdsafsadfsaddf"
        hover:c="pink"
        focus:c="red"
        hover-focus:c="blue"
      />
      <Div
        {...otherProps()}
        onClick={() =>
          setOtherProps({
            c: "pink",
            bg: "white",
            classStyle: { "&:hover": { color: "black" } },
          })
        }
      >
        cccc
      </Div>
      <MyCom
        after:content="'12132132'"
        text="6666"
        c="var(--my-data)"
        var:my-data="blue"
        hover:c="black"
        bg="rgba(255,255,255,var(--bg-op, 0.5))"
      />
    </Div>
  );
}

export default App;
