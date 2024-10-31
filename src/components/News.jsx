import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaShareAlt } from 'react-icons/fa';

const News = () => {
  // Sample data for news posts
  const newsPosts = [
    {
      id: 1,
      headline: "Breaking News 1",
      image: "https://via.placeholder.com/400x250/FF5733/FFFFFF?text=News+1",
      description: "This is a short description for the news post.",
      link: "/news/1"
    },
    {
      id: 2,
      headline: "Breaking News 2",
      image: "https://via.placeholder.com/400x250/33FF57/FFFFFF?text=News+2",
      description: "This is a short description for the news post.",
      link: "/news/2"
    },
    {
      id: 3,
      headline: "Breaking News 3",
      image: "https://via.placeholder.com/400x250/3357FF/FFFFFF?text=News+3",
      description: "This is a short description for the news post.",
      link: "/news/3"
    },
    {
      id: 4,
      headline: "Breaking News 4",
      image: "https://via.placeholder.com/400x250/FFFF33/FFFFFF?text=News+4",
      description: "This is a short description for the news post.",
      link: "/news/4"
    },
    {
      id: 5,
      headline: "Breaking News 5",
      image: "https://via.placeholder.com/400x250/FF33A6/FFFFFF?text=News+5",
      description: "This is a short description for the news post.",
      link: "/news/5"
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">News Update</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
            {/* News Image */}
            <img
              src={post.image}
              alt={post.headline}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            {/* Headline */}
            <h3 className="text-xl font-semibold mb-2">{post.headline}</h3>

            {/* Description */}
            <p className="text-gray-700 mb-4">{post.description}</p>

            {/* Read More and Share Buttons */}
            <div className="mt-auto flex justify-between items-center">
              <a
                href={post.link}
                className="text-blue-600 hover:underline font-semibold"
              >
                Read More
              </a>

              {/* Share Options */}
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-blue-500">
                  <FaFacebook />
                </button>
                <button className="text-gray-500 hover:text-blue-400">
                  <FaTwitter />
                </button>
                <button className="text-gray-500 hover:text-blue-600">
                  <FaLinkedin />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <FaShareAlt />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
