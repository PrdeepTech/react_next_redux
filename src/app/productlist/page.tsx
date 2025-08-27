"use client"

import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";


const ProductPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const itemsPerPage = 5; // How many items per page


  const router = useRouter();
  const goToProduct = (id: number, title: string) => {
    router.push(`/productlist/product/${id}`);
  };

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  //     setTotalPages(Math.ceil(totalCount / itemsPerPage));
  // }, [currentPage]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setData(result); // Store all data as is
    };
    fetchData();
  }, []);

  //const [customdata] = useFetch("https://fakestoreapi.com/products");

  // Slice data for current page
  const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <>

      <h1 className="text-2xl font-bold mb-4 px-6 pt-5">Product List</h1>
      <div className="flex flex-wrap justify-center gap-4 p-4">

        {
          paginatedData.map((item: any) => {

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
                  className='btnStyle'
                  onClick={() => goToProduct(item.id, item.title)}>
                  View
                </button>
              </div>
            )
          })}
      </div>
      {/* Pagination Controls */}
        <div className='text-center' style={{ marginTop: "20px" }}>
          <button onClick={() => setCurrentPage((p) => p - 1)} disabled={currentPage === 1}>
            <FontAwesomeIcon className='cursor-pointer px-2' icon={faAngleLeft} />
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
          >
            <FontAwesomeIcon className='cursor-pointer px-2' icon={faAngleRight} />
          </button>
        </div>
    </>
  )
}

export default ProductPage
