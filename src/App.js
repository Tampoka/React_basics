import {useState} from "react";
import "./styles/App.css"
import PostItem from "./components/PostItem";

function App() {
    const [value, setValue] = useState('text inside input')

    return (
        <div className="App">
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
        </div>
    );
}

export default App;
