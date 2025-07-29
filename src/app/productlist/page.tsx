"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";


const ProductPage = () => {
  const [data, setData] = useState(null);

  const router = useRouter();
  const goToProduct = (id: number, title: string) => {
   router.push(`/productlist/product/${id}`);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
    
      <h1 className="text-2xl font-bold mb-4 px-6 pt-5">Product List</h1>
      <div className="flex flex-wrap justify-center gap-4 p-4">

        {data &&
          data.map((item) => {

            return (

              <div
                key={item.id}
                id={item.id}
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  padding: '10px',
                  width: '200px',
                  backgroundColor: '#fff',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '150px', objectFit: 'contain' }}
                />
                <h3 style={{ fontSize: '16px', margin: '10px 0' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'green', fontWeight: 'bold' }}>
                  ₹{item.price}
                </p>
                <button
                  style={{
                    marginTop: '10px',
                    padding: '8px 12px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                  onClick={()=> goToProduct(item.id, item.title)}>
                  View
                </button>
              </div>


            )
          })}
      </div>
    </>
  )
}

export default ProductPage
