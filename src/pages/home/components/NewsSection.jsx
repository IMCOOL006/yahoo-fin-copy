import React from 'react';
import NewsCard from './NewsCard';
import StockLink from '@/components/ui/StockLink';

const NewsSection = ({ newsData }) => {
  const featuredArticle = newsData[0];
  const rightColumnArticles = newsData.slice(1, 6);
  const latestArticles = newsData.slice(6, 14);

  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="md:col-span-2 flex flex-col gap-4 md:gap-6">
          {featuredArticle && (
            <NewsCard article={featuredArticle} featured={true} />
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {newsData.slice(1, 3).map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="font-bold text-base md:text-lg mb-2">Latest</div>
          {rightColumnArticles.map((article) => (
            <div key={article.id} className="border-b pb-3 last:border-b-0">
              <div className="font-semibold text-sm md:text-base text-gray-900 leading-tight line-clamp-2 mb-1 hover:underline cursor-pointer">
                {article.title}
              </div>
              <div className="flex items-center text-xs text-gray-500 gap-2">
                <span>{article.source}</span>
                <span>•</span>
                <span>{article.timeAgo}</span>
                {article.relatedStocks && article.relatedStocks.length > 0 && (
                  <span className="flex gap-1">
                    {article.relatedStocks.slice(0, 2).map((symbol) => (
                      <span key={symbol} className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded text-xs font-medium">
                        <StockLink symbol={symbol} />
                      </span>
                    ))}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;

