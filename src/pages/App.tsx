import { Div, Input } from "../components";
import { JSX, createSignal, mergeProps, splitProps } from "solid-js";
import { wrapperCustomComponentProps } from "../utils";
import { Dynamic } from "solid-js/web";

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
      class="ppp tttt"
      display="flex"
      color={color()}
      onClick={() => setColor((pre) => (pre === "red" ? "blue" : "red"))}
      classList={{ ooo: true }}
      userSelect="none"
      backgroundColor="green"
      attr:oo-b={color()}
      var:my-data={color()}
    >
      <div class="iii" classList={{ yyy: true }}>
        tttttt
      </div>
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
