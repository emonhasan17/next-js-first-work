import Link from 'next/link';
import React from 'react';

const ProductsPage = () => {

    const products = [
        // Clothes
        {
            id: "66cf1b4a9a8b2f7a1d4e1001",
            productName: "Classic Denim Jacket",
            productImage: "https://i.ibb.co.com/Kj2NwBXF/Classic-Denim-Jacket.jpg",
            description: "Stylish unisex denim jacket made with 100% cotton, perfect for casual wear.",
            price: 3200,
            quantity: 15
        },
        {
            id: "66cf1b4a9a8b2f7a1d4e1002",
            productName: "Summer T-Shirt",
            productImage: "https://i.ibb.co.com/mFC71GXk/Summer-T-Shirt.jpg",
            description: "Lightweight cotton t-shirt available in multiple colors.",
            price: 3200,
            quantity: 15
        },
        {
            id: "66cf1b4a9a8b2f7a1d4e1003",
            productName: "Leather Boots",
            productImage: "https://i.ibb.co.com/Lh6SMTN8/Leather-Boots.jpg",
            description: "Durable leather boots designed for comfort and style.",
            price: 3200,
            quantity: 15
        },


        // Gadgets
        {
            id: "66cf1b4a9a8b2f7a1d4e2001",
            productName: "Wireless Earbuds",
            productImage: "https://i.ibb.co.com/7JTf34K7/Wireless-Earbuds.jpg",
            description: "Compact wireless earbuds with noise cancellation and 24-hour battery life.",
            price: 3200,
            quantity: 15
        },
        {
            id: "66cf1b4a9a8b2f7a1d4e2002",
            productName: "Smartphone Pro Max",
            productImage: "https://i.ibb.co.com/PvNHhc1X/Smartphone-Pro-Max.jpg",
            description: "Latest generation smartphone with 6.7-inch OLED display and triple camera system.",
            price: 3200,
            quantity: 15
        },
        {
            id: "66cf1b4a9a8b2f7a1d4e2003",
            productName: "Gaming Laptop",
            productImage: "https://i.ibb.co.com/6j1xw5k/Gaming-Laptop.jpg",
            description: "High-performance gaming laptop with RTX graphics and 16GB RAM.",
            price: 3200,
            quantity: 15
        },

        // Furniture
        {
            id: "66cf1b4a9a8b2f7a1d4e3001",
            productName: "Wooden Coffee Table",
            productImage: "https://i.ibb.co.com/FbPWRHV8/Wooden-Coffee-Table.jpg",
            description: "Modern wooden coffee table with storage shelf.",
            price: 3200,
            quantity: 15
        },
        {
            id: "66cf1b4a9a8b2f7a1d4e3002",
            productName: "Luxury Sofa Set",
            productImage: "https://i.ibb.co.com/60Dpwd5M/Luxury-Sofa-Set.jpg",
            description: "Comfortable 3-seater sofa set with premium upholstery.",
            price: 3200,
            quantity: 15
        },
        {
            id: "66cf1b4a9a8b2f7a1d4e3003",
            productName: "Office Chair",
            productImage: "https://i.ibb.co.com/TyRkb9G/Office-Chair.jpg",
            description: "Ergonomic office chair with adjustable height and lumbar support.",
            price: 3200,
            quantity: 15
        }
    ];


    return (
        <div className=' w-8/12 mx-auto'>
            <p className='font-bold text-center mb-10 mt-5 text-3xl'>products page</p>
            <div className=' grid grid-cols-3 gap-6'>
                {
                    products.map((p, idx) => {
                        return (
                            <div key={idx} className='space-y-6'>
                                    <img className='' src={p.productImage} />
                                <p>Id: {p.id}</p>
                                <p>{p.productName}</p>
                                <p>Quantity: {p.quantity}</p>
                                <Link href={`/products/${p.id}`} className="bg-gray-400 p-4 text-amber-200 rounded-2xl">
                                    See Details
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