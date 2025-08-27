import Link from 'next/link';
import React from 'react';

const ProductsPage = () => {

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
            productImage: "https://i.ibb.co.com/wrhLJYD7/Mixed-Fruit-Basket-image.jpg",
            description: "Professional DSLR camera with 24MP resolution, 4K video recording, and interchangeable lenses."
        }
    ];


    return (
        <div className=' w-8/12 mx-auto'>
            <p className='font-bold text-3xl'>products page</p>
            <div className='flex gap-6'>
                {
                    products.map((p, idx) => {
                        return (
                            <div key={idx}>
                                <Link href={`/products/${p.id}`}>
                                    <img className='' src={p.productImage} />
                                </Link>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProductsPage;