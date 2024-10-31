import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-6">
        
        {/* About Us */}
        <div>
          <h4 className="text-xl font-bold mb-4">About Us</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Our Mission</a></li>
            <li><a href="#" className="hover:underline">Party History</a></li>
            <li><a href="#" className="hover:underline">Leadership</a></li>
            <li><a href="#" className="hover:underline">Join Us</a></li>
          </ul>
        </div>

        {/* Thoughts */}
        <div>
          <h4 className="text-xl font-bold mb-4">Thoughts</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Policy Ideas</a></li>
            <li><a href="#" className="hover:underline">Speeches</a></li>
            <li><a href="#" className="hover:underline">Publications</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-xl font-bold mb-4">Categories</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Economy</a></li>
            <li><a href="#" className="hover:underline">Healthcare</a></li>
            <li><a href="#" className="hover:underline">Education</a></li>
            <li><a href="#" className="hover:underline">Environment</a></li>
          </ul>
        </div>

        {/* News */}
        <div>
          <h4 className="text-xl font-bold mb-4">News</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Latest News</a></li>
            <li><a href="#" className="hover:underline">Press Releases</a></li>
            <li><a href="#" className="hover:underline">Media Coverage</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
          </ul>
        </div>

        {/* Social Connect */}
        <div>
          <h4 className="text-xl font-bold mb-4">Social Connect</h4>
          <div className='flex-col space-y-4 mb-2'>
            <p>infosamajwadi.show@gmail.com</p>
          </div>
          <div className="flex space-x-4">
            <a 
            href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbTdIbzBfQjFyTEd0LXVSSmQ3NFNaVFpGb0ZjUXxBQ3Jtc0tudjZBcUkyVWNxX2N3WE5tOU9QTEItblVBOTNacXVGUnZwMW9lMmRvMnVoRmNfb21aTEFtRi1rV1RGZTBPWFk5WVBRN3ktaVVDWlRPWXg3dXZ0Ty1uQWl1VWtwZkNEbHlQaXhkc2JLNC1menBlckxkMA&q=https%3A%2F%2Fwww.facebook.com%2Fthesamajwadishow" 
            target='_blank'
            className="hover:text-blue-300">
              <FaFacebook size={24} />
            </a>
            <a 
            href="/https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbWc1d1dxaVBDZWQteGxGOXZpekZ6ZzFtZzFaZ3xBQ3Jtc0trWnZqOVhWSFNUenJZN3pEVy1CSDY1WWFybXBGUmM1a3lYY2wzemVKWi1uWkpKaXhGRklpbzBjS2dreTMwYzJWT1YxaTFqQV96eXBNUGdNa1p3S1ZaTjhUTlpta1dOSndtOUZmREhoX3lfaTdTQThDcw&q=https%3A%2F%2Ftwitter.com%2Fsamajwadishow" 
            target='_blank'
            className="hover:text-blue-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.youtube.com/@TheSamajwadiShow" target='_blank' className="hover:text-blue-300">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center text-sm">
        <p>&copy; 2024 SPTV Samjhwadi Party. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
