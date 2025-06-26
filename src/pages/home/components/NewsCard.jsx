import React, { useState } from 'react';
import { Clock, ExternalLink } from 'lucide-react';
import THUMBNAIL from '../../../assets/thumbnail.jpg';

const PLACEHOLDER_IMG = THUMBNAIL;

const NewsCard = ({ article, featured = false }) => {
  const [imgError, setImgError] = useState(false);
  const cardClasses = featured
    ? "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
    : "bg-white border-b border-gray-200 py-4 hover:bg-gray-50 transition-colors cursor-pointer";

  const imageClasses = featured
    ? "w-full h-32 sm:h-48 object-cover"
    : "w-20 sm:w-24 h-14 sm:h-16 object-cover rounded";

  const contentClasses = featured
    ? "p-4 sm:p-6"
    : "flex-1 ml-3 sm:ml-4 min-w-0";

  const imageSrc = imgError || !article.imageUrl ? PLACEHOLDER_IMG : article.imageUrl;

  return (
    <article className={cardClasses} tabIndex={0} aria-label={article.title}>
      {featured ? (
        <>
          <img
            src={imageSrc}
            alt={article.title}
            className={imageClasses}
            onError={() => setImgError(true)}
            loading="lazy"
          />
          <div className={contentClasses}>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-2">
              <span className="font-medium text-blue-600">{article.source}</span>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{article.timeAgo}</span>
              </div>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
              {article.title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base line-clamp-3 mb-2 sm:mb-4">
              {article.summary}
            </p>
            {article.relatedStocks.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm text-gray-500">Related:</span>
                {article.relatedStocks.slice(0, 3).map((symbol) => (
                  <span
                    key={symbol}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {symbol}
                  </span>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-4">
          <img
            src={imageSrc}
            alt={article.title}
            className={imageClasses}
            onError={() => setImgError(true)}
            loading="lazy"
          />
          <div className={contentClasses}>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-1">
              <span className="font-medium text-blue-600">{article.source}</span>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{article.timeAgo}</span>
              </div>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-1 sm:mb-2">
              {article.summary}
            </p>
            {article.relatedStocks.length > 0 && (
              <div className="flex items-center space-x-1">
                {article.relatedStocks.slice(0, 2).map((symbol) => (
                  <span
                    key={symbol}
                    className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700"
                  >
                    {symbol}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
};

export default React.memo(NewsCard);

