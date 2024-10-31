import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const NewsSlider = () => {
  const slides = [
    {
      id: 1,
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/1xd01gW0YCI',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
      title: 'Breaking News 1',
      description: 'तेलंगाना में श्री अखिलेश की दहाड़, बोले- मिलकर बीजेपी को हराएंगे | Akhilesh Yadav in Telangana'
    },
    {
      id: 2,
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/MWyz_baT960',
      title: 'Breaking News 2',
      description: 'तेलंगाना पहुंचे श्री अखिलेश यादव जी का स्वागत | Akhilesh yadav in Telangana'
    },
    {
      id: 3,
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/6ezQcVbYG34',
      // image: 'https://www.youtube.com/embed/1xd01gW0YCI',
      title: 'Breaking News 3',
      description: 'अखिलेश यादव ने डिप्टी सीएम केशव प्रसाद मौर्या को दिया सरकार बनाने का ऑफर | Akhilesh Yadav latest video | Ex Akhilesh Yadav gives a open Offer to Deputy CM UP Keshav Prasad Maurya to form government'
    },
    {
      id: 3,
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/Y0L_bB_5AZU',
      title: 'Breaking News 4',
      description: 'अखिलेश बोले, चाचा शिवपाल जी राजनीति के पुराने खिलाड़ी हैं | Akhilesh Yadav'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNext();
    }, 3000); // 3 seconds for each slide
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 mb-[20%]">
      <h2 className="text-3xl font-bold mb-6 text-center">SPTV - Video Collection</h2>

      <div className="relative">
        {/* Slide Images or Videos */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-64 md:h-96 rounded-lg transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.type === 'video' ? (
              <div className="relative w-full h-full">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={slide.videoUrl} // Using embed URL here
                  title={slide.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
                  {/* <h3 className="text-xl font-bold">{slide.title}</h3> */}
                  <p>{slide.description}</p>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
                  <h3 className="text-xl font-bold">{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </>
            )}
          </div>
        ))}

        {/* Navigation Buttons */}
        <div className='flex justify-between'>
        <IconButton
          onClick={handlePrev}
          className="absolute left-4 bottom-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white"
        >
          <ArrowBackIos />
        </IconButton>
        <IconButton
          onClick={handleNext}
          className="absolute right-4 bottom-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white"
        >
          <ArrowForwardIos />
        </IconButton>
        </div>
      </div>
    </div>
  );
};

export default NewsSlider;
