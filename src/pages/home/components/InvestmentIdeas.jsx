import React from 'react';
import StockLink from '@/components/ui/StockLink';
import { ideasData } from '@/data/investmentIdeasData';

const InvestmentIdeas = () => {
  return (
    <div className="w-full bg-white py-8 border-b">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Investment Ideas</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {ideasData.map((idea, idx) => (
            <div key={idea.title} className="bg-white border rounded-xl shadow-sm p-4 min-w-[220px] flex-1 flex flex-col">
              <div className="font-bold text-base md:text-lg mb-1">{idea.title}</div>
              <div className="text-xs text-gray-500 mb-2">{idea.description}</div>
              <table className="w-full text-xs mb-2">
                <thead>
                  <tr className="text-gray-500">
                    <th className="text-left font-medium">Company</th>
                    <th className="text-right font-medium">Last Price</th>
                    {idea.items[0].netAssets && <th className="text-right font-medium">Net Assets</th>}
                    <th className="text-right font-medium">{idea.title === 'Top ETFs' ? '' : 'Avg. Rating'}</th>
                  </tr>
                </thead>
                <tbody>
                  {idea.items.map((item) => (
                    <tr key={item.symbol} className="border-t last:border-b-0">
                      <td className="py-1">
                        <span className="font-semibold text-blue-700 mr-1">
                          <StockLink symbol={item.symbol} />
                        </span>
                        <span className="text-gray-700">{item.name}</span>
                      </td>
                      <td className={`text-right font-semibold ${item.change && item.change.startsWith('-') ? 'text-red-600' : 'text-green-700'}`}>{item.price}</td>
                      {item.netAssets && <td className="text-right">{item.netAssets}</td>}
                      <td className="text-right">
                        {item.rating && (
                          <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${item.rating === 'STRONG BUY' ? 'bg-green-700 text-white' : item.rating === 'BUY' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-700'}`}>
                            {item.rating}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-auto text-right">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-xs md:text-sm">View More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentIdeas; 