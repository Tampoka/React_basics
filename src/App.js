import {useState} from "react";
import "./styles/App.css"
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import MySelect from "./components/select/MySelect";

function App() {
    const [posts, setPosts] = useState([{id: 1, title: "Higher Order Functions in javascript.", body: "description"},
        {id: 2, title: "What is an Immediately Invoked Function in javascript?", body: "description"},
        {id: 3, title: "What is Currying in javascript?"}])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect defaultValue={'Filter by'}
                options={[{value: 'title', name: 'Title'},
                    {value: 'body', name: 'Description'}]}/>
            </div>
            {
                posts.length > 0
                    ? <PostsList posts={posts}
                                 title="Posts List 1"
                                 remove={removePost}/>
                    : <h2 style={{textAlign: 'center'}}>Posts were not found!</h2>
            }
        </div>
    );
}

export default App;
