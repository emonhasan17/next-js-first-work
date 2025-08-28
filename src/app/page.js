import Image from "next/image";
import Banner from "./components/Banner";
import Link from "next/link";

export default function Home() {
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


  ];
  return (
    <div>
      <div className="mt-10 "><Banner></Banner></div>
      <h1 className="text-3xl text-center font-bold mb-6">Featured Products</h1>
      <div className='grid grid-cols-3 gap-6 w-4/6 mx-auto'>
      
        {
          products?.map((p, idx) => {
            return (
              <div key={idx} className="space-y-6">
                <img className='' alt="" src={p.productImage} />
                <p className="text-3xl">{p.productName}</p>
                <Link href={`/products/${p.id}`} className="bg-gray-400 p-4 text-amber-200 rounded-2xl">See Details</Link>
                {/* <Link href={`/${p.id}`}>
                                    <img className='' alt="" src={p.productImage} />
                                </Link> */}
              </div>

            )
          })
        }
      </div>
    </div>

  );
}
