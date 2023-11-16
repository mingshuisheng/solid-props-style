import {Div} from "../components";
import {createSignal} from "solid-js";

function App() {
  const [color, setColor] = createSignal("red")
  const [show, _] = createSignal(false)

  return (
    <Div color={color()} onClick={() => setColor(pre => pre === "red" ? "blue" : "red")} classList={{"ooo": show()}} userSelect="none">
      qqq
    </Div>
  )
}

export default App
