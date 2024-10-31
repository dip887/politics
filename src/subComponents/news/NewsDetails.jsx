import React from 'react';
import { useParams } from 'react-router-dom';
import { newsContent1, newsContent2, newsContent3 } from './NewsContent';

const NewsDetail = () => {
  const { newsId } = useParams();

  // Placeholder data for each news post based on newsId
  const newsData = {
    // 'main-post': {
    //   title: 'Morning Digest',
    //   image: '/ln.jpg',
    //   content: `${newsContent1}`
        
    // },
    'news-1': {
      title: 'जिसने जंग टाली है, समझो उसने जंग हारी है: अयोध्या के मिल्कीपुर से उपचुनाव की घोषणा न होने पर राष्ट्रीय अध्यक्ष अखिलेश यादव',
      image: '/news/n.jpeg',
      content: `${newsContent1}`
      },
    'news-2': {
        title: 'चुनावी फायदे के लिए भाजपा ने करवाई बहराइच हिंसा, जनता समझ रही है ये किसकी पुरानी आदत है: अखिलेश यादव',
        image: '/news/n1.jpeg',
        content: `${newsContent2}`
    },
    'news-3': {
      title: ' त्योहार है, वरना बैरिकेडिंग रोक नहीं पाती:JPNIC जाने से रोकने पर अखिलेश यादव',
      image: '/news/n2.jpeg',
      content: `${newsContent3}`
    }
  };

  const news = newsData[newsId] || {
    title: 'News Not Found',
    image: 'https://via.placeholder.com/800x400',
    content: 'The news article you are looking for does not exist.'
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold mb-4">{news.title}</h2>
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-full object-cover rounded-lg shadow-lg mb-6"
      />
      <p className="text-gray-700 whitespace-pre-line">{news.content}</p>
    </div>
  );
};

export default NewsDetail;
