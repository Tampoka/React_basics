import {useEffect, useState} from "react";
import "./styles/App.css"
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";

function App() {
    const [posts, setPosts] = useState([{id: 1, title: "Higher Order Functions in javascript.", body: "description"},
        {id: 2, title: "hat is an Immediately Invoked Function in javascript?", body: "description"},
        {id: 3, title: "What is Currying in javascript?", body: "hello"}])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [isPostsLoading, setPostsIsLoading] = useState(false)

    useEffect(() => {
        fetchPosts()
    }, [filter])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    async function fetchPosts() {
        setPostsIsLoading(true)
        setTimeout(async () => {
            const posts = await PostService.getAll()
            setPosts(posts)
            setPostsIsLoading(false)
        }, 1000)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            {/*<button onClick={fetchPosts}>GET POSTS</button>*/}
            <MyButton style={{marginTop: 50}} onClick={() => setModal(true)}>
                Add post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                setFilter={setFilter}
                filter={filter}/>
            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                    <Loader/>
                </div>
                : <PostsList posts={sortedAndSearchedPosts}
                             title="Posts List 1"
                             remove={removePost}/>
            }
        </div>
    );
}

export default App;
