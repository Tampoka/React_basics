import {useState} from "react";
import Counter from "./components/Counter";

function App() {
const [value, setValue]=useState('text inside input')

  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
