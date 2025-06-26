import React from 'react';
import { Link } from 'react-router-dom';
import { videoData } from '@/data/videoData';
import THUMBNAIL from '../../../assets/thumbnail.jpg';

const VideoSection = () => {
  return (
    <section className="w-full bg-white py-8 border-b">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="md:col-span-2 flex flex-col min-w-0">
          <div className="relative rounded overflow-hidden mb-4">
            <Link to="/news/featured" tabIndex={0} aria-label="Sen. Elizabeth Warren slams Trump's tariff inconsistency">
              <img
                src={THUMBNAIL}
                alt="Main Video"
                className="w-full h-48 md:h-72 object-cover"
                loading="lazy"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex flex-col justify-end p-4 md:p-6">
                <div className="bg-pink-600 text-white text-xs font-bold px-2 py-1 mb-2 w-max rounded">BREAKING NEWS</div>
                <div className="text-white text-base md:text-lg font-bold mb-1">Sen. Elizabeth Warren slams Trump's tariff inconsistency</div>
                <div className="bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded w-max">Now just moments ago, Senator Elizabeth Warren ...</div>
              </div>
            </Link>
          </div>
          <div className="text-lg md:text-2xl font-bold text-gray-900 mb-2">Sen. Elizabeth Warren slams Trump's tariff inconsistency</div>
          <div className="text-gray-700 mb-2 text-sm md:text-base">Speaking to reporters ahead of Federal Reserve Chairman Jerome Powell's testimony before the Senate Banking Committee, Senator Elizabeth Warren (D-Mass.) slammed President Trump's tariffs, addressing how the ...</div>
          <div className="text-xs text-gray-500">1h ago</div>
        </div>
        <div className="flex flex-col gap-3 md:gap-4 min-w-0">
          {videoData.map((video) => (
            <article key={video.id} className="flex gap-2 md:gap-3 mb-2 last:mb-0 min-w-0" tabIndex={0} aria-label={video.title}>
              <div className="relative">
                <img src={video.image} alt={video.title} className="w-24 h-16 md:w-32 md:h-20 object-cover rounded" loading="lazy" />
                <span className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-xs md:text-sm text-gray-900 leading-tight line-clamp-2 mb-1 hover:underline cursor-pointer">
                  {video.title}
                </div>
                <div className="text-xs text-gray-500 mb-1">{video.meta}</div>
                <div className="flex gap-1 flex-wrap">
                  {video.tickers.map((t) => (
                    <span
                      key={t.symbol}
                      className={`text-xs font-medium px-1.5 py-0.5 rounded ${t.positive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}
                    >
                      {t.symbol} {t.change}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
          <div className="mt-2">
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-xs md:text-sm">View More →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection; 