import {useState} from "react";
import "./styles/App.css"
import PostsList from "./components/PostsList";

function App() {
    const [posts, setPosts] = useState([{id:1, title:"Higher Order Functions in javascript.",body:"description"},
        {id:2, title:"What is an Immediately Invoked Function in javascript?",body:"description"},
        {id:3, title:"What is Currying in javascript?"}])

    return (
        <div className="App">
        <PostsList posts={posts} title="Posts List 1"/>
        </div>
    );
}

export default App;
