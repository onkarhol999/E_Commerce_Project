import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    brand: '',
    productType: 'ELECTRONICS',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'price' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/addProduct', formData);
      alert('🎉 Product added successfully!');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Server error:', error.response?.data || error.message);
      alert('🚫 Failed to add product. See console for details.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white border-2 border-purple-300 rounded-3xl shadow-2xl p-8">
        <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-8">
          ✨ Add New Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Group */}
          {[
            { label: 'Product Name', name: 'name', type: 'text' },
            { label: 'Description', name: 'description', type: 'textarea' },
            { label: 'Price ($)', name: 'price', type: 'number' },
            { label: 'Brand', name: 'brand', type: 'text' },
            { label: 'Image URL', name: 'image', type: 'text' }
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-purple-600 mb-1">{label}</label>
              {type === 'textarea' ? (
                <textarea
                  name={name}
                  rows={3}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  required
                />
              ) : (
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  step={name === 'price' ? '0.01' : undefined}
                  required
                />
              )}
            </div>
          ))}

          {/* Product Type */}
          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">Category</label>
            <select
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            >
              <option value="ELECTRONICS">Electronics</option>
              <option value="FASHION">FASHION</option>
              <option value="GROCERY">GROCERY</option>
              <option value="BOOKS">Books</option>
              <option value="Toy">Toy</option>
            </select>
          </div>

          {/* Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-transform transform hover:scale-105"
            >
              ➕ Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
