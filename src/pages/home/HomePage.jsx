import React from 'react';
import NewsSection from './components/NewsSection';
import VideoSection from './components/VideoSection';
import InvestmentIdeas from './components/InvestmentIdeas';
import BuildYourWealth from './components/BuildYourWealth';
import MoreNews from './components/MoreNews';
import Footer from '../../components/Footer';
import newsData from '../../data/newsData';

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NewsSection newsData={newsData} />
      <VideoSection />
      <InvestmentIdeas />
      <BuildYourWealth />
      <MoreNews />
      <Footer />
    </div>
  );
};

export default HomePage; 