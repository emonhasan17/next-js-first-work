'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutPage = () => {

    const router = useRouter()
    const isLoggedIn = true
    const handleNavigation = ()=>{
        if(isLoggedIn){
            router.push('/about/address')
        }else{
            router.push('/')
        }
    }


    return (
        <div>
            <h1>About Page</h1>
            <Link href='/about/address'>Address Page</Link> <br />
            <button type='button' onClick={handleNavigation}>Address page</button>
        </div>
    );
};

export default AboutPage;