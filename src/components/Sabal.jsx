import React, { useState } from 'react';

const Sabal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Stores form data in variable
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Large Image */}
      <div className="w-full h-80 md:h-full">
        <img src="/s1.jpg" alt="Sabal" className="w-full h-full object-cover rounded-lg shadow-lg" />
      </div>

      {/* Form */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6">Fill Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
          ></textarea>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sabal;
