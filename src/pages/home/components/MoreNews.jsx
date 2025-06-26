import React from 'react';
import { moreNewsData } from '@/data/moreNewsData';
import THUMBNAIL from '../../../assets/thumbnail.jpg';

const MoreNews = () => {
  return (
    <div className="w-full bg-white py-8 border-b">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">More News</h2>
        <div className="flex flex-col divide-y">
          {moreNewsData.map((news) => (
            <div key={news.id} className="flex flex-col sm:flex-row items-start py-4 gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-base md:text-lg text-gray-900 mb-1 hover:underline cursor-pointer">{news.title}</div>
                {news.summary && <div className="text-gray-700 text-sm md:text-base mb-1 line-clamp-2">{news.summary}</div>}
                <div className="text-xs text-gray-500 mb-1">
                  {news.source} · {news.time}
                </div>
                {news.tickers && (
                  <div className="flex gap-1 flex-wrap">
                    {news.tickers.map((t) => (
                      <span
                        key={t.symbol}
                        className={`text-xs font-medium px-1.5 py-0.5 rounded ${t.positive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}
                      >
                        {t.symbol} {t.change}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <img src={news.image} alt={news.title} className="w-full sm:w-20 h-16 object-cover rounded mt-2 sm:mt-0" />
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="px-4 md:px-6 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition text-sm md:text-base">Show More</button>
        </div>
      </div>
    </div>
  );
};

export default MoreNews; 