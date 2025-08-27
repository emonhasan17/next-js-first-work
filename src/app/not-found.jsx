import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <h1>404 not found</h1>
            <Link href='/'>go to home</Link>
        </div>
    );
};

export default NotFoundPage;