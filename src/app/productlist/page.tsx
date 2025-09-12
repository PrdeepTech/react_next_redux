"use client"

import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  address?: { street?: string; city?: string };
  company?: { name?: string };
};

const ProductPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const itemsPerPage = 5; // How many items per page

  const [tableData, setTableData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<User[]>([]);
  const [selected, setSelected] = useState<User | null>(null);

  const router = useRouter();
  const goToProduct = (id: number, title: string) => {
    router.push(`/productlist/product/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setData(result); // Store all data as is
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Example API: JSONPlaceholder users
    const searchLower = search.toLowerCase();
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setTableData(json);
        setFiltered(json); // initially all rows
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // 🔍 Search filter
  useEffect(() => {
    const searchLower = search.toLowerCase();
    const results = tableData.filter(
      (user) => {
        const name = user.name?.toLowerCase() ?? "";
        const email = user.email?.toLowerCase() ?? "";
        const company = user.company?.name?.toLowerCase() ?? "";
        const city = user.address?.city?.toLowerCase() ?? "";

        return (
          name.includes(searchLower) ||
          email.includes(searchLower) ||
          company.includes(searchLower) ||
          city.includes(searchLower)
        );
      });
    setFiltered(results);
  }, [search, data]);

  if (loading) {
    return <p className="p-6 text-gray-600">Loading data...</p>;
  }

  //const [customdata] = useFetch("https://fakestoreapi.com/products");

  // Slice data for current page
  const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <>
      <div className="overflow-x-auto rounded-2xl shadow-md border border-gray-200">
        <table className="w-full text-sm text-left text-gray-700">
          <caption className="caption-top text-lg font-semibold p-3 bg-gray-50 border-b border-gray-200">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search by name, email, company, city..."
                className="w-full max-w-md px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </caption>
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold text-gray-900">#</th>
              <th scope="col" className="px-4 py-3 font-semibold text-gray-900">Name</th>
              <th scope="col" className="px-4 py-3 font-semibold text-gray-900">Email</th>
              <th scope="col" className="px-4 py-3 font-semibold text-gray-900">Company Name</th>
              <th scope="col" className="px-4 py-3 font-semibold text-gray-900">Address</th>
              <th scope="col" className="px-4 py-3 font-semibold text-gray-900">City</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((user) => (
                <tr
                  key={user.id}
                  onClick={() => setSelected(user)}
                  className="border-b hover:bg-gray-50 odd:bg-white even:bg-gray-50"
                >
                  <td className="px-4 py-3">{user.id}</td>
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">{user.address?.street}</td>
                  <td className="px-4 py-3">{user.address?.city}</td>
                  <td className="px-4 py-3">{user.company?.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-gray-500">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">{selected.name}</h2>
            <p>
              <span className="font-semibold">Email:</span> {selected.email}
            </p>
            <p>
              <span className="font-semibold">Address:</span>{" "}
              {selected.address?.street}, {selected.address?.city}
            </p>
            <p>
              <span className="font-semibold">Company:</span>{" "}
              {selected.company?.name}
            </p>
          </div>
        </div>
      )}
      <br></br>
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
