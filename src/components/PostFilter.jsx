import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./select/MySelect";

const PostFilter = ({filter,setFilter}) => {
    return (
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
    );
};

export default PostFilter;