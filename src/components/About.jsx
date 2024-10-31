import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    { name: "John Doe", role: "Editor-in-Chief", image: "https://via.placeholder.com/150" },
    { name: "Jane Smith", role: "Senior Reporter", image: "https://via.placeholder.com/150" },
    { name: "Mike Johnson", role: "Investigative Journalist", image: "https://via.placeholder.com/150" },
    { name: "Emily Davis", role: "Photographer", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>

      {/* Introduction */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
        <p className="text-gray-700">
          We are a dedicated news organization committed to delivering accurate, unbiased, and timely news to our readers. Our mission is to inform, educate, and empower our community with in-depth journalism that matters. With a team of passionate reporters, editors, and photographers, we cover local, national, and global stories with integrity and transparency.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p className="text-gray-700">
          Our mission is to provide our readers with factual, balanced, and in-depth news coverage. We believe in the power of informed communities and strive to promote transparency, integrity, and responsibility in journalism.
        </p>
      </div>

      {/* Core Values */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Integrity</strong>: We are committed to honest and ethical reporting.</li>
          <li><strong>Transparency</strong>: We believe in openness and clarity in all our stories.</li>
          <li><strong>Objectivity</strong>: We aim to present facts without bias.</li>
          <li><strong>Responsibility</strong>: We take our role in society seriously, ensuring our content is accurate and responsible.</li>
        </ul>
      </div>

      {/* Team Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
