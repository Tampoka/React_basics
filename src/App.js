import {useRef, useState} from "react";
import "./styles/App.css"
import PostsList from "./components/PostsList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([{id: 1, title: "Higher Order Functions in javascript.", body: "description"},
        {id: 2, title: "What is an Immediately Invoked Function in javascript?", body: "description"},
        {id: 3, title: "What is Currying in javascript?"}])

    const [title, setTitle] = useState('')

    const bodyInputRef = useRef()

    const addNewPost = (e) => {
        e.preventDefault()
        console.log(bodyInputRef.current.value)
    }
    return (
        <div className="App">
            <form>
                <MyInput
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Post title"/>
                <MyInput
                    ref={bodyInputRef}
                    type=" text"
                    placeholder="Post description"/>
                <MyButton onClick={addNewPost}>Add post</MyButton>
            </form>
            <PostsList posts={posts} title="Posts List 1"/>
        </div>
    );
}

export default App;
