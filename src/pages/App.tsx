import {Div, Input} from "../components";
import {createSignal, splitProps} from "solid-js";
import {wrapperCustomComponentProps} from "../utils";
import "./app.css";

const MyCom = wrapperCustomComponentProps<{ text: string }>((props) => {
  const [text, other] = splitProps(props, ["text"]);

  return <Div {...other}>{text.text}</Div>;
});

function App() {
  const [color, setColor] = createSignal("red");
  const [show, _] = createSignal(true);

  const [otherProps, setOtherProps] = createSignal<Parameters<typeof Div>[0]>({});

  return (
    <Div
      class="ppp tttt"
      flex
      // display="flex"
      c={color()}
      onClick={() => setColor((pre) => (pre === "red" ? "white" : "red"))}
      classList={{ooo: show()}}
      userSelect="none"
      bg="green"
    >
      qqq
      <Input color="green" value="1" disabled={true}/>
      <Div
        {...otherProps}
        onClick={() =>
          setOtherProps({
            c: "pink",
            bg: "white",
            classStyle: {"&:hover": {color: "black"}},
          })
        }
      >
        cccc
      </Div>
      <MyCom
        text="6666"
        c="var(--my-data)"
        var:my-data="blue"
        classStyle={{
          "&:hover": {
            color: "black",
          },
        }}
      />
    </Div>
  );
}

export default App;
