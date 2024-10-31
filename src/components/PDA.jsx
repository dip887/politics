import React from 'react';
import { newsContent3 } from '../subComponents/news/NewsContent';

const PDA = () => {
  // Example images array for scrolling
  const images = [
    '/news/n.jpeg',
    '/news/n1.jpeg',
    '/news/n2.jpeg',
    '/p1.jpg',
    '/s.jpg',
    '/h1.jpg'
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-5 gap-4">

      {/* Left Scrolling Images */}
      <div className="col-span-1 overflow-hidden h-full relative">
        <div className="scrolling-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Scrolling ${index + 1}`}
              className="w-full mb-4 rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Center Article Content */}
      <div className="col-span-3 p-4">
        <h2 className="text-3xl font-bold mb-4">त्योहार है, वरना बैरिकेडिंग रोक नहीं पाती:JPNIC जाने से रोकने पर अखिलेश यादव
        </h2>
        <p className='whitespace-pre-line'>
          {newsContent3}
        </p>
      </div>

      {/* Right Scrolling Images */}
      <div className="col-span-1 overflow-hidden h-full relative">
        <div className="scrolling-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Scrolling ${index + 1}`}
              className="w-full mb-4 rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PDA;
