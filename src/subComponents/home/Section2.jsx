import React from 'react';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Latest News</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Large Post (Left Side) */}
        <div className="relative">
          <img
            src="/news/n.jpeg"
            alt="Main News Post"
            className="w-full h-80 md:h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 rounded-lg text-white">
            {/* <Link
              to="/news/main-post"
              className="text-2xl font-bold hover:underline"
            >
              Morning Digest
            </Link> */}
            <p className="mt-2">
              जिसने जंग टाली है, समझो उसने जंग हारी है: अयोध्या के मिल्कीपुर से उपचुनाव की घोषणा न होने पर राष्ट्रीय अध्यक्ष अखिलेश यादव
            </p>
            <Link
              to="/news/news-1"
              className="text-blue-400 hover:text-blue-500 mt-2"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Small Posts (Right Side) */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {/* Top Left Image */}
          {/* <div className="relative">
            <img
              src="/news/n1.jpeg"
              alt="News 1"
              className="w-full h-40 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-2 rounded-lg text-white">
              <Link to="/news/news-1" className="font-bold hover:underline">
                News Headline 1
              </Link>
              <p className="mt-2">
                चुनावी फायदे के लिए भाजपा ने करवाई बहराइच हिंसा, जनता समझ रही है ये किसकी पुरानी आदत है: अखिलेश यादव
              </p>
              <Link
                to="/news/news-1"
                className="text-blue-400 hover:text-blue-500 mt-2"
              >
                Read More
              </Link>
            </div>
          </div> */}

          {/* Top Right Image */}
          {/* <div className="relative">
            <img
              src="https://via.placeholder.com/400x250/3357FF/FFFFFF?text=News+2"
              alt="News 2"
              className="w-full h-40 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-2 rounded-lg text-white">
              <Link to="/news/news-2" className="font-bold hover:underline">
                News Headline 2
              </Link>
              <Link
                to="/news/news-2"
                className="text-blue-400 hover:text-blue-500 mt-2"
              >
                Read More
              </Link>
            </div>
          </div> */}

          <div className="relative col-span-2">
            <img
              src="/news/n1.jpeg"
              alt="News 3"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-2 rounded-lg text-white">
              {/* <Link to="/news/news-3" className="font-bold hover:underline">
                News Headline 3
              </Link> */}
              <p>
              चुनावी फायदे के लिए भाजपा ने करवाई बहराइच हिंसा, जनता समझ रही है ये किसकी पुरानी आदत है: अखिलेश यादव
              </p>
              <Link
                to="/news/news-2"
                className="text-blue-400 hover:text-blue-500 mt-2"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Bottom Large Image */}
          <div className="relative col-span-2">
            <img
              src="/news/n2.jpeg"
              alt="News 3"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-2 rounded-lg text-white">
              {/* <Link to="/news/news-3" className="font-bold hover:underline">
                News Headline 3
              </Link> */}
              <p>
              त्योहार है, वरना बैरिकेडिंग रोक नहीं पाती:JPNIC जाने से रोकने पर अखिलेश यादव
              </p>
              <Link
                to="/news/news-3"
                className="text-blue-400 hover:text-blue-500 mt-2"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
