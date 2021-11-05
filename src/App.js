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
import {useFetching} from "./hooks/useFetching";
import {getPagesArray, getPagesCount} from "./utils/pages";

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setlimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    let pagesArray = getPagesArray(totalPages)

    console.log(pagesArray)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll()
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts()
    }, [filter])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
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
            {postError &&
            <h2>ERROR ${postError}</h2>}
            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                    <Loader/>
                </div>
                : <PostsList posts={sortedAndSearchedPosts}
                             title="Posts List 1"
                             remove={removePost}/>
            }
            <div className="page__wrapper">
                {pagesArray.map(p =>
                    <span
                        onClick={()=>setPage(p)}
                        key={p}
                        className={page === p ? 'page page__current' : 'page'}>{p}</span>
                )}
            </div>

        </div>
    );
}

export default App;
