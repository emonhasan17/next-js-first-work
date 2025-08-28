'use client'
import React, { useEffect, useState } from 'react';
const SearchInput = () => {
    // const [meals,setMeals] = useState([])
    const [search,setSearch] = useState('')
    useEffect(()=>{
    },[search])
    return (
        <div className='text-center'>
                <input className='bg-amber-50 text-black' value={search} onChange={e=>setSearch(e.target.value)} />
            </div>
    );
};

export default SearchInput;