import React from 'react';

export const singlePost = async(id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

const page = async({params}) => {
    const ids = await params
    const id = ids.id
    const getSinglePost = await singlePost(id)
    return (
        <div>
            <p>id: {id}</p>
            <h1>{getSinglePost.title}</h1>
            <h1>{getSinglePost.body}</h1>
            
        </div>
    );
};

export default page;