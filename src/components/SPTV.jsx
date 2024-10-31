import React from 'react';

const SPTV = () => {
  const videos = [
    {
      url: 'https://www.youtube.com/embed/1xd01gW0YCI',
      description: 'तेलंगाना में श्री अखिलेश की दहाड़, बोले- मिलकर बीजेपी को हराएंगे | Akhilesh Yadav in Telangana'
    },
    {
      url: 'https://www.youtube.com/embed/MWyz_baT960',
      description: 'तेलंगाना पहुंचे श्री अखिलेश यादव जी का स्वागत | Akhilesh yadav in Telangana'
    },
    {
      url: 'https://www.youtube.com/embed/6ezQcVbYG34',
      description: 'अखिलेश यादव ने डिप्टी सीएम केशव प्रसाद मौर्या को दिया सरकार बनाने का ऑफर | Akhilesh Yadav latest video | Ex Akhilesh Yadav gives a open Offer to Deputy CM UP Keshav Prasad Maurya to form government'
    },
    {
      url: 'https://www.youtube.com/embed/Y0L_bB_5AZU',
      description: 'अखिलेश बोले, चाचा शिवपाल जी राजनीति के पुराने खिलाड़ी हैं | Akhilesh Yadav'
    },
    // {
    //   url: 'https://www.youtube.com/embed/VIDEO_ID5',
    //   description: 'This is a description for Video 5.'
    // },
    // {
    //   url: 'https://www.youtube.com/embed/VIDEO_ID6',
    //   description: 'This is a description for Video 6.'
    // },
  ];

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">SPTV - Video Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="relative w-full h-64 flex flex-col items-center">
            <iframe
              className="w-full h-full rounded-lg"
              src={video.url}
              title={`Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-center text-gray-700 mt-2">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SPTV;
