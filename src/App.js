import logo from "./logo.svg";
import "./App.css";
import FillFruits from "../src/components/FillFruits";
//
function App() {
  return (
    <>
      <button className="start" onclick="clickButton(13)">
        <strong>Restart</strong>
      </button>
      <div>
        <FillFruits />
      </div>
    </>
  );
}

export default App;
