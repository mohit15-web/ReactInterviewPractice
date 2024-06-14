import Dropdown from "./components/Dropdown";
import { useState } from "react";
import Toast from "./components/Toast";
const first = ["left", "right"];
const second = ["top", "bottom"];
const third = ["Success", "Error", "Warning", "Info"];
function App() {
  const [leftOrRight, setLeftOrRight] = useState("");
  const [topOrBottom, setTopOrBottom] = useState("");
  const [color, setColor] = useState("");
  const [show, setShow] = useState(false);
  console.log(leftOrRight, topOrBottom, color);

    setTimeout(() => {
      setShow(false)
    },4000)

  return (
    <div className="flex justify-center items-center mt-10 flex-col">
      <h1 className="mb-4 text-2xl font-semibold">Toast Popup</h1>
      <Dropdown arr={first} value={setLeftOrRight} />
      <Dropdown arr={second} value={setTopOrBottom} />
      <Dropdown arr={third} value={setColor} />

      <button onClick={() => setShow(!show)}>Show Toast</button>
      {show && (
        <Toast
          leftOrRight={leftOrRight}
          topOrBottom={topOrBottom}
          color={color}
          text={"show this text"}
        />
      )}
    </div>
  );
}

export default App;
