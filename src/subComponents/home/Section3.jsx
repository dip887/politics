import React from 'react';

const CardSection = () => {
  const cards = [
    { id: 1, logo: '/l.jpg', word: 'Infographics', tagline: 'Pradhan Mantri Jeevan Jyoti Bima, National Health Protection Scheme, National Public Bicycle Scheme, schemes for students and other initiatives undertaken by the Modi Government. Click to know more about investment schemes in India.', link: '/policy' },
    { id: 2, logo: '/l1.jpg', word: 'Speeches', tagline: 'Driving economic growth...', link: '/growth' },
    { id: 3, logo: '/l2.png', word: 'Gallery', tagline: 'Healthcare initiatives...', link: '/health' },
    { id: 4, logo: '/l3.png', word: 'Write to the Akhilesh', tagline: 'Educational reforms...', link: '/education' },
    { id: 5, logo: '/l4.png', word: 'Subscribe to Newsletter', tagline: 'Ensuring national security...', link: '/security' },
    { id: 6, logo: '/l5.png', word: 'Podcast', tagline: 'Sustainability efforts...', link: '/environment' },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Focus Areas</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="group relative bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105">
            {/* Logo and Word (initially visible) */}
            <div className="flex flex-col items-center justify-center p-6 h-56 group-hover:opacity-0 transition-opacity duration-300">
              <img src={card.logo} alt={card.word} className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold">{card.word}</h3>
            </div>

            {/* Hover Content (hidden initially, visible on hover) */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
              <p className="text-white mb-3">{card.tagline}</p>
              <a
                href={card.link}
                className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-full text-sm transition-colors"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
