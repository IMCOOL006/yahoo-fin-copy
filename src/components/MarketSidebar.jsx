import React, { useState } from 'react';
import { Search, TrendingUp, TrendingDown, Clock, Settings, Menu } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Sheet, SheetContent } from '../components/ui/Sheet';
import StockLink from './ui/StockLink';
import { gainers, losers, mostActiveStocks, trending, tabs } from '@/data/marketSidebarData';

const MiniChart = ({ color = 'green' }) => (
  <div style={{ width: 48, height: 20, background: 'none', display: 'flex', alignItems: 'center' }}>
    <svg width="48" height="20">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points="0,15 10,10 20,12 30,6 40,10 48,4"
      />
    </svg>
  </div>
);

const Card = ({ children }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4 p-4 last:mb-0">
    {children}
  </div>
);

const MarketSummary = ({ activeTab, setActiveTab }) => (
  <div>
    <div className="flex items-center mb-2">
      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
      <span className="text-xs text-gray-700 font-medium">U.S. markets open in 2h 29m</span>
    </div>
    <div className="flex space-x-1 mb-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-2 py-1 text-xs font-medium rounded ${
            activeTab === tab ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:text-green-700'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-2 text-xs">
      <div className="flex flex-col items-center">
        <span className="font-semibold text-blue-700">S&P Futures</span>
        <span>6,143.50</span>
        <span className="text-red-600">-2.75 (-0.04%)</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-semibold text-blue-700">Dow Futures</span>
        <span>43,380.00</span>
        <span className="text-red-600">-44.00 (-0.10%)</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-semibold text-blue-700">Nasdaq Fut.</span>
        <span>22,423.00</span>
        <span className="text-green-600">+10.25 (+0.05%)</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-semibold text-blue-700">Russell 2000</span>
        <span>2,176.10</span>
        <span className="text-red-600">-1.80 (-0.08%)</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-semibold text-blue-700">VIX</span>
        <span>17.33</span>
        <span className="text-red-600">-0.15 (-0.86%)</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-semibold text-blue-700">Gold</span>
        <span>3,339.50</span>
        <span className="text-green-600">+5.60 (+0.17%)</span>
      </div>
    </div>
  </div>
);

const StockRow = ({ stock, color = 'green', showChart = true }) => (
  <div className="flex items-center justify-between py-1">
    <div className="flex flex-col min-w-0 flex-1">
      <StockLink symbol={stock.symbol} className={`font-medium text-xs truncate ${color === 'red' ? 'text-red-700' : 'text-blue-700'}`}/>
      <span className="text-xs text-gray-500 truncate">{stock.name}</span>
    </div>
    {showChart && <MiniChart color={color === 'red' ? '#dc2626' : '#16a34a'} />}
    <div className="text-right ml-2">
      <span className="text-xs font-medium text-gray-900">{stock.formattedPrice}</span>
      <span className={`block text-xs ${color === 'red' ? 'text-red-600' : 'text-green-600'}`}>{stock.formattedChange}</span>
    </div>
  </div>
);

const MarketSidebar = ({ marketData, topGainers, topLosers, mostActive }) => {
  const [activeTab, setActiveTab] = useState('US');
  const [quoteSearch, setQuoteSearch] = useState('');
  const [open, setOpen] = useState(false);

  const sidebarContent = (
    <div className="w-80 max-w-full">
      <Card>
        <div className="flex items-center mb-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Quote Lookup"
              value={quoteSearch}
              onChange={(e) => setQuoteSearch(e.target.value)}
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
          <button className="ml-2 p-2 rounded-full hover:bg-gray-100 transition"><Settings className="h-4 w-4 text-gray-400" /></button>
        </div>
        <MarketSummary activeTab={activeTab} setActiveTab={setActiveTab} />
      </Card>
      <Card>
        <div className="mb-2 font-semibold text-gray-900 text-sm">Portfolio</div>
        <div className="text-center py-4">
          <p className="text-gray-500 text-xs mb-2">Sign in to access your portfolio</p>
          <Button variant="outline" size="sm">
            Sign in
          </Button>
        </div>
      </Card>
      <Card>
        <div className="mb-2 font-semibold text-gray-900 text-sm">Top gainers</div>
        {gainers.map((stock) => (
          <StockRow key={stock.symbol} stock={stock} color="green" />
        ))}
      </Card>
      <Card>
        <div className="mb-2 font-semibold text-gray-900 text-sm">Top losers</div>
        {losers.map((stock) => (
          <StockRow key={stock.symbol} stock={stock} color="red" />
        ))}
      </Card>
      <Card>
        <div className="mb-2 font-semibold text-gray-900 text-sm">Most active</div>
        {mostActiveStocks.map((stock) => (
          <StockRow key={stock.symbol} stock={stock} color={stock.formattedChange.startsWith('-') ? 'red' : 'green'} />
        ))}
      </Card>
      <Card>
        <div className="mb-2 font-semibold text-gray-900 text-sm">Earnings events</div>
        <div className="text-xs text-gray-500">No earnings events for this period.</div>
      </Card>
      <Card>
        <div className="mb-2 font-semibold text-gray-900 text-sm">Trending tickers</div>
        {trending.map((stock) => (
          <StockRow key={stock.symbol} stock={stock} color={stock.formattedChange.startsWith('-') ? 'red' : 'green'} />
        ))}
      </Card>
      <Card>
        <div className="mb-2 font-semibold text-gray-900 text-sm">Top economic events</div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium">India</span>
          <span role="img" aria-label="India">🇮🇳</span>
        </div>
        <div className="text-xs text-gray-700">
          <div className="flex justify-between mb-1"><span>Industrial Output YY*</span><span>Jun 30, 2025</span></div>
          <div className="flex justify-between mb-1"><span>Trade Balance-RBI*</span><span>Jun 30, 2025</span></div>
          <div className="flex justify-between mb-1"><span>Imports - USD *</span><span>Jul 6, 2025</span></div>
          <div className="flex justify-between mb-1"><span>Trade Def Govt -USD *</span><span>Jul 6, 2025</span></div>
        </div>
      </Card>
      <div className="text-xs text-gray-400 text-center mt-4">
        <div>Terms and Privacy Policy</div>
        <div>Privacy Dashboard</div>
        <div>Ad Terms · Feedback</div>
      </div>
    </div>
  );

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Button variant="outline" size="icon" onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="p-0 w-full max-w-xs sm:max-w-sm">
          {sidebarContent}
        </SheetContent>
      </Sheet>
      <div className="hidden md:block">
        {sidebarContent}
      </div>
    </>
  );
};

export default MarketSidebar;

