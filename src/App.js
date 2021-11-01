import {useState} from "react";
import  "./styles/App.css"
function App() {
    const [value, setValue] = useState('text inside input')

    return (
        <div className="App">
            <div className="post">
                <div className="post__content">
                    <strong>1. Higher Order Functions in javascript.</strong>
                    <div>Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
                        Higher order functions are a result of functions being first-class citizens in javascript.</div>
                </div>
            <div className="post__btns">
                <button>Delete</button>
            </div>
            </div>
        </div>
    );
}

export default App;
