import { Div, Input } from "../components";
import { createSignal } from "solid-js";
import { wrapperCustomComponentProps } from "../utils";

const MyCom = wrapperCustomComponentProps<{ text: string }>((props) => {
  return (
    <Div
      class={props.class}
      style={props.style}
      classList={props.classList}
      {...props.attrs}
    >
      {props.text}
    </Div>
  );
});

function App() {
  const [color, setColor] = createSignal("red");
  const [show, _] = createSignal(false);

  return (
    <Div
      display="flex"
      color={color()}
      onClick={() => setColor((pre) => (pre === "red" ? "blue" : "red"))}
      classList={{ ooo: show() }}
      userSelect="none"
      backgroundColor="green"
      attr:oo-b={color()}
      var:my-data={color()}
    >
      qqq
      <Input color="green" value="1" disabled={true} />
      <MyCom
        text="6666"
        color="var(--my-data)"
        classStyle={{
          "&:hover": {
            color: "black",
          },
        }}
        attr:oot-b={color()}
      />
    </Div>
  );
}

export default App;
