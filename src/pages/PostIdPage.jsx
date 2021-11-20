import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})

    const [fetchPostsById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getbyId(params.id)
        setPost(response.data)
    })

    useEffect(() => {
        fetchPostsById(params.id)
    },[])
    return (
        <div>
            <h1>This is post page with id={params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post
                }</div>
            }
        </div>
    );
};

export default PostIdPage;