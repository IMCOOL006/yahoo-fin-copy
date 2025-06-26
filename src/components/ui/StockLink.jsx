import React from 'react';
import { Link } from 'react-router-dom';

const StockLink = ({ symbol, children, className = '' }) => {
  return (
    <Link
      to={`/stocks/${symbol}`}
      className={`text-blue-700 hover:underline font-medium ${className}`}
      title={`View details for ${symbol}`}
    >
      {children || symbol}
    </Link>
  );
};

export default StockLink; 