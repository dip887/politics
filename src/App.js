import Home from "./components/Home";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import SPTV from "./components/SPTV";
import Sabal from "./components/Sabal";
import PDA from "./components/PDA";
import News from "./components/News";
import AboutUs from "./components/About";
import ContactUs from "./components/Contact";
import NewsDetail from "./subComponents/news/NewsDetails";


function App() {
  return (
    <Router>
    <Navbar />
    {/* <Home /> */}
    <Routes>
      <Route path="/" default element={<Home />} />
      <Route path="/sptv" element={<SPTV />} />
      <Route path="/sabal" element={<Sabal />} />
      <Route path="/pda" element={<PDA />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:newsId" element={<NewsDetail />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
    <Footer/>
  </Router>

  );
}

export default App;
