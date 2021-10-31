import {useState} from "react";
import ClassCounter from "./components/ClassCounter";

function App() {
    const [value, setValue] = useState('text inside input')

    return (
        <div className="App">
            <ClassCounter/>
        </div>
    );
}

export default App;
