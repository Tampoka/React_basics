import {useEffect, useRef, useState} from "react";
import "../styles/App.css"
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {usePosts} from "../hooks/usePosts";
import {getPagesCount} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/modal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/loader/Loader";
import PostsList from "../components/PostsList";
import Pagination from "../components/UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page,limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
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
            <MySelect label="Posts per page"
                      value={limit}
                      onChange={value => setLimit(value)}
                      options={[
                          {value: 5, name: '5'},
                          {value: 10, name: '10'},
                          {value: 25, name: '25'},
                          {value: -1, name: 'Show all'}
                      ]}/>
            {postError &&
            <h2>ERROR ${postError}</h2>}
            {isPostsLoading &&
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                <Loader/>
            </div>
            }
            <PostsList posts={sortedAndSearchedPosts}
                       title="Posts List 1"
                       remove={removePost}/>
            <div ref={lastElement} style={{height: 20, background: 'red'}}/>
            <Pagination page={page}
                        changePage={changePage}
                        totalPages={totalPages}
            />
        </div>
    );
}

export default Posts;
