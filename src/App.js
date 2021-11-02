import {useMemo, useState} from "react";
import "./styles/App.css"
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import MySelect from "./components/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([{id: 1, title: "Higher Order Functions in javascript.", body: "description"},
        {id: 2, title: "hat is an Immediately Invoked Function in javascript?", body: "description"},
        {id: 3, title: "What is Currying in javascript?", body: "dfsffs"}])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPosts=useMemo(()=>{
            console.log('finished')
            if(selectedSort){
                return  [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
            }
            return posts}
        ,[selectedSort,posts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const sortedAndSearchedPosts=useMemo(()=>{
    return sortedPosts.filter(post=>post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    },[searchQuery,sortedPosts])

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }
    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e=>setSearchQuery(e.target.value)}
                    placeholder="Search"
                />
                <MySelect label="Filter by"
                          value={selectedSort}
                          onChange={sortPosts}
                          defaultValue={'Filter by'}
                          options={[{value: 'title', name: 'Title'},
                              {value: 'body', name: 'Description'}]}/>
            </div>
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
