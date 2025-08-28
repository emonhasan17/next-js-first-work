import Link from 'next/link';
import React from 'react';

export const getPosts = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}

const page = async () => {

    const posts = await getPosts()


    return (
        <div className='gap-8 grid grid-cols-4'>
            {
                posts.map(p=>{
                    return(
                        <div  key={p.id}>
                            <p>{p.title}</p>
                            <p>{p.body}</p>
                            <Link href={`/posts/${p.id}`}>Details</Link>
                        </div>

                    )
                })
            }
            
        </div>
    );
};

export default page;