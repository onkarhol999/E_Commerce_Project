import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');

  const productsPerPage = 20;

  // Function to fetch products from the API with or without search
  const fetchProducts = async (keyword = '') => {
    try {
      const response = await axios.get(`http://localhost:8080/search?keyword=${keyword}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch all products initially
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  // Trigger search when the user presses Enter
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchProducts(searchKeyword);
    setCurrentPage(1); // Reset to first page after search
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-10 text-center">
        🌟 Featured Products
      </h1>

      {/* Enhanced Search Bar */}
      <div className="mb-6 flex justify-center">
        <form onSubmit={handleSearchSubmit} className="flex items-center max-w-md w-full bg-white/90 backdrop-blur-lg border border-purple-200 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
          <input
            type="text"
            value={searchKeyword}
            onChange={handleSearchChange}
            placeholder="Search for products..."
            className="w-full py-3 px-6 rounded-full text-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition duration-200"
          />
          <button
            type="submit"
            className="px-6 py-3 ml-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:bg-gradient-to-l focus:outline-none transition duration-300"
          >
            Search
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentProducts.map(product => (
          <div
            key={product.id}
            className="bg-white/90 backdrop-blur-lg border border-purple-100 rounded-2xl shadow-xl hover:shadow-2xl transition-transform hover:scale-105 duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-purple-800 truncate">{product.name}</h2>
                <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
                  {product.productType}
                </span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
              <p className="text-sm text-gray-800">Brand: <span className="font-medium">{product.brand}</span></p>
              <p className="text-xl text-pink-600 font-bold">${product.price.toFixed(2)}</p>
              <button className="w-full mt-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition">
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-10 space-x-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 bg-purple-200 text-purple-800 rounded hover:bg-purple-300"
          disabled={currentPage === 1}
        >
          ⬅ Prev
        </button>
        <span className="text-lg font-medium text-gray-700 mt-1">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-purple-200 text-purple-800 rounded hover:bg-purple-300"
          disabled={currentPage === totalPages}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default Home;
