import {useState} from "react";
import "./styles/App.css"
import PostItem from "./components/PostItem";

function App() {
    const [value, setValue] = useState('text inside input')

    return (
        <div className="App">
            <PostItem post={{id:1, title:"Higher Order Functions in javascript.",description:"Functions that operate on other " +
                    "functions, either by taking them as arguments or by returning them, are called higher-order functions. Higher order " +
                    "functions are a result of functions being first-class citizens in javascript."}}/>
        </div>
    );
}

export default App;
