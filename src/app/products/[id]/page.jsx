import React from 'react';

const ProductDetailsPage = ({ params }) => {

    const products = [

        {
            id: "66cd1a4f9a8b2f7a1d4e5678",
            productName: "Smart Watch",
            productImage: "https://i.ibb.co.com/1tGG9PL5/Fruit-Juice-in-bottle.jpg",
            description: "Water-resistant smartwatch with health tracking, GPS, and customizable watch faces."
        },

        {
            id: "66cd1a4f9a8b2f7a1d4e1121",
            productName: "Bluetooth Speaker",
            productImage: "https://i.ibb.co.com/C30kjJp0/Fruit-Pack-Banana-Apple-Slice.jpg",
            description: "Portable Bluetooth speaker with deep bass, 10 hours playtime, and waterproof design."
        },
        {
            id: "66cd1a4f9a8b2f7a1d4e3141",
            productName: "DSLR Camera",
            productImage: "/globe.svg",
            description: "Professional DSLR camera with 24MP resolution, 4K video recording, and interchangeable lenses."
        }
    ];


    const id = params.id
    const product = products.find(p => p.id == id)
    if(product){
        return (
            <div className=' w-8/12 mx-auto border p-20'>
                <h1>ProductDetailsPage</h1>
                <div className='flex justify-center items-center'>
                    <div className='w-4/6 mx-auto'>
                        <p>id: {id}</p>
                        <p>{product.productName}</p>
    
                        <p>Description:</p>
                        <p>{product.description}</p>
                    </div>
    
                    <img className='w-3/8' src={product.productImage} />
                </div>
            </div>
        );
    }else{
        return (
            <>
            <p>not found product</p>
            </>
        )
    }
    
};

export default ProductDetailsPage;