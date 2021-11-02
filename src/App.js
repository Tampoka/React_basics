import {useMemo, useState} from "react";
import "./styles/App.css"
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([{id: 1, title: "Higher Order Functions in javascript.", body: "description"},
        {id: 2, title: "hat is an Immediately Invoked Function in javascript?", body: "description"},
        {id: 3, title: "What is Currying in javascript?", body: "dfsffs"}])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
            console.log('finished')
            if (filter.sort) {
                return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
            }
            return posts
        }
        , [filter.sort, posts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                setFilter={setFilter}
                filter={filter}/>
            {
                sortedAndSearchedPosts.length > 0
                    ? <PostsList posts={sortedAndSearchedPosts}
                                 title="Posts List 1"
                                 remove={removePost}/>
                    : <h2 style={{textAlign: 'center'}}>Posts were not found!</h2>
            }
        </div>
    );
}

export default App;
