import React from 'react';
import PostItem from "./PostItem";

const PostsList = ({posts, title, remove}) => {
    if(!posts.length){
        return  <h2 style={{textAlign: 'center'}}>Posts were not found!</h2>
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post, index) => <PostItem number={index + 1}
                                                  key={post.id}
                                                  post={post}
                                                  remove={remove}/>)}
        </div>
    );
};

export default PostsList;