import React from 'react';
import Header from './Header';
import StockTicker from './StockTicker';
import MarketSidebar from './MarketSidebar';
import { Outlet } from 'react-router-dom';
import { stocksData, futuresData } from '../data/stocksData';

const Layout = () => {
  const tickerStocks = [...futuresData, ...stocksData.slice(0, 6)];
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <StockTicker stocks={tickerStocks} />
      <div className="flex flex-col md:flex-row flex-1">
        <div className="flex-1">
          <Outlet />
        </div>
        <MarketSidebar />
      </div>
    </div>
  );
};

export default Layout;

