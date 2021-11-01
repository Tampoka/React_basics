import {useState} from "react";
import "./styles/App.css"
import PostsList from "./components/PostsList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([{id:1, title:"Higher Order Functions in javascript.",body:"description"},
        {id:2, title:"What is an Immediately Invoked Function in javascript?",body:"description"},
        {id:3, title:"What is Currying in javascript?"}])

    return (
        <div className="App">
            <form>
                <MyInput placeholder="Post title"/>
                <MyInput placeholder="Post description"/>
                <MyButton disabled>Add post</MyButton>
            </form>
        <PostsList posts={posts} title="Posts List 1"/>
        </div>
    );
}

export default App;
