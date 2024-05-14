import "./App.css";
import Accordion from "./components/accordion";
import { RandomColour } from "./components/random_colour";

function App() {
  return (
    <div className="App">
      <Accordion />
      <hr className="m-4" />
      <RandomColour />
    </div>
  );
}

export default App;
