import React from 'react';
import { Link } from 'react-router-dom';
import { editorsPick, smartMoney, moreWays } from '@/data/buildYourWealthData';

const BuildYourWealth = () => {
  return (
    <section className="w-full bg-white py-8 border-b">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Build Your Wealth</h2>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base">View More →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Link to="/wealth/editors-pick" tabIndex={0} aria-label="Editor's Pick">
            <article className="bg-gray-50 rounded-xl shadow-sm p-4 md:p-6 flex flex-col h-full min-w-0" aria-label="Editor's Pick">
              <div className="font-semibold mb-2 text-gray-800 text-base md:text-lg">Editor's Pick</div>
              <img src={editorsPick.image} alt="Editor's Pick" className="w-full h-36 md:h-40 object-cover rounded mb-4 border" loading="lazy" />
              <div className="text-lg md:text-xl font-bold text-blue-700 mb-2 leading-tight">{editorsPick.headline}</div>
              <div className="text-gray-700 mb-2 text-sm md:text-base">{editorsPick.summary}</div>
              <div className="text-xs text-gray-500 mb-4">{editorsPick.time}</div>
            </article>
          </Link>
          <article className="bg-gray-50 rounded-xl shadow-sm p-4 md:p-6 flex flex-col h-full min-w-0" aria-label="Smart Money Moves">
            <div className="font-semibold mb-2 text-gray-800 text-base md:text-lg">Smart Money Moves</div>
            <img src={smartMoney.image} alt="Smart Money" className="w-full h-24 md:h-28 object-cover rounded mb-4 border" loading="lazy" />
            <ul className="space-y-3 flex-1">
              {smartMoney.articles.map((a) => (
                <li key={a} className="text-sm md:text-base text-gray-900 hover:underline cursor-pointer">{a}</li>
              ))}
            </ul>
          </article>
          <article className="bg-gray-50 rounded-xl shadow-sm p-4 md:p-6 flex flex-col h-full min-w-0" aria-label="More Ways to Save">
            <div className="font-semibold mb-2 text-gray-800 text-base md:text-lg">More Ways to Save</div>
            <img src={moreWays.image} alt="More Ways to Save" className="w-full h-24 md:h-28 object-cover rounded mb-4 border" loading="lazy" />
            <ul className="space-y-3 flex-1">
              {moreWays.articles.map((a) => (
                <li key={a} className="text-sm md:text-base text-gray-900 hover:underline cursor-pointer">{a}</li>
              ))}
            </ul>
          </article>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-8">
          {editorsPick.buttons.map((btn) => (
            <button key={btn} className="border border-emerald-700 text-emerald-700 rounded px-3 md:px-4 py-2 text-sm md:text-base font-medium hover:bg-emerald-50 transition whitespace-nowrap" tabIndex={0} aria-label={btn}>{btn}</button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildYourWealth; 