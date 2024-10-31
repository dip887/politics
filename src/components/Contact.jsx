import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    document: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, document: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="bg-gray-100 py-16 px-4">
      {/* Heading */}
      <div className='flex flex-col'>
      <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>
        <p className='text-xl text-center mb-8'> Become member of Samjhwadi Party </p>
      </div>

    

      {/* Form Container */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-3 block w-full rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-3 block w-full rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 p-3 block w-full rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="mt-1 p-3 block w-full rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          {/* Upload Document Field */}
          <div>
            <label htmlFor="document" className="block text-lg font-medium text-gray-700">
              Upload Document
            </label>
            <input
              type="file"
              id="document"
              name="document"
              onChange={handleFileChange}
              className="mt-1 p-3 block w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
