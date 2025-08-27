import React from 'react';

const AboutSlugPage = async ({params}) => {
    const id = await params
    console.log(id)
    return (
        <div>
            slug
        </div>
    );
};

export default AboutSlugPage;