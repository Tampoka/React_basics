import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostsById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getbyId(params.id)
        setPost(response.data)
    })

    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostsById(params.id)
        fetchComments(params.id)
    },[])
    return (
        <div>
            <h1>This is post page with id={params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}.  {post.title}</div>
            }
            <h2>Comments</h2>
            {isCommentsLoading
            ?<Loader/>
            :<div>
                    {comments.map(c=>
                    <div style={{marginTop:15}} key={c.id}>
                        <h5>{c.email}</h5>
                        <div>{c.body}</div>
                    </div>)}
                </div>}
        </div>
    );
};

export default PostIdPage;