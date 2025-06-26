import { Stock } from '../service/Stock.js';

export const stocksData = [
  new Stock({
    symbol: '^GSPC',
    name: 'S&P 500',
    price: 6119.00,
    change: 42.00,
    changePercent: 0.69,
    volume: 2500000000,
    marketCap: null,
    peRatio: 25.4,
    dividendYield: 1.3,
    high52Week: 6200.00,
    low52Week: 4900.00
  }),
  new Stock({
    symbol: '^DJI',
    name: 'Dow Jones Industrial Average',
    price: 43176.00,
    change: 275.00,
    changePercent: 0.64,
    volume: 450000000,
    marketCap: null,
    peRatio: 28.1,
    dividendYield: 1.8,
    high52Week: 44000.00,
    low52Week: 38000.00
  }),
  new Stock({
    symbol: '^IXIC',
    name: 'NASDAQ Composite',
    price: 22284.00,
    change: 210.50,
    changePercent: 0.95,
    volume: 3200000000,
    marketCap: null,
    peRatio: 35.2,
    dividendYield: 0.8,
    high52Week: 23000.00,
    low52Week: 18500.00
  }),
  new Stock({
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    price: 348.68,
    change: 26.52,
    changePercent: 8.23,
    volume: 89000000,
    marketCap: 1100000000000,
    peRatio: 65.4,
    dividendYield: 0.0,
    high52Week: 415.00,
    low52Week: 138.80
  }),
  new Stock({
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 234.85,
    change: -2.15,
    changePercent: -0.91,
    volume: 45000000,
    marketCap: 3600000000000,
    peRatio: 28.9,
    dividendYield: 0.4,
    high52Week: 250.00,
    low52Week: 164.08
  }),
  new Stock({
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 445.20,
    change: 5.80,
    changePercent: 1.32,
    volume: 22000000,
    marketCap: 3300000000000,
    peRatio: 32.1,
    dividendYield: 0.7,
    high52Week: 468.35,
    low52Week: 362.90
  }),
  new Stock({
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 185.50,
    change: -1.90,
    changePercent: -1.01,
    volume: 18000000,
    marketCap: 2300000000000,
    peRatio: 24.8,
    dividendYield: 0.0,
    high52Week: 193.31,
    low52Week: 129.40
  }),
  new Stock({
    symbol: 'AMZN',
    name: 'Amazon.com, Inc.',
    price: 218.75,
    change: 3.25,
    changePercent: 1.51,
    volume: 35000000,
    marketCap: 2300000000000,
    peRatio: 45.2,
    dividendYield: 0.0,
    high52Week: 230.00,
    low52Week: 139.52
  }),
  new Stock({
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    price: 144.17,
    change: 0.32,
    changePercent: 0.22,
    volume: 67000000,
    marketCap: 3500000000000,
    peRatio: 68.5,
    dividendYield: 0.03,
    high52Week: 152.89,
    low52Week: 39.23
  }),
  new Stock({
    symbol: 'META',
    name: 'Meta Platforms, Inc.',
    price: 598.45,
    change: -8.20,
    changePercent: -1.35,
    volume: 15000000,
    marketCap: 1500000000000,
    peRatio: 26.7,
    dividendYield: 0.4,
    high52Week: 638.40,
    low52Week: 279.49
  })
];

export const futuresData = [
  new Stock({
    symbol: 'NQ=F',
    name: 'Nasdaq Futures',
    price: 22280.75,
    change: 207.25,
    changePercent: 0.94,
    volume: 125000,
    marketCap: null,
    peRatio: null,
    dividendYield: null,
    high52Week: null,
    low52Week: null
  }),
  new Stock({
    symbol: 'YM=F',
    name: 'Dow Futures',
    price: 43170.00,
    change: 269.00,
    changePercent: 0.63,
    volume: 85000,
    marketCap: null,
    peRatio: null,
    dividendYield: null,
    high52Week: null,
    low52Week: null
  }),
  new Stock({
    symbol: 'ES=F',
    name: 'S&P Futures',
    price: 6118.50,
    change: 41.50,
    changePercent: 0.68,
    volume: 195000,
    marketCap: null,
    peRatio: null,
    dividendYield: null,
    high52Week: null,
    low52Week: null
  })
];

export const commoditiesData = [
  new Stock({
    symbol: 'GC=F',
    name: 'Gold',
    price: 3326.40,
    change: -68.60,
    changePercent: -2.02,
    volume: 245000,
    marketCap: null,
    peRatio: null,
    dividendYield: null,
    high52Week: 3450.00,
    low52Week: 2850.00
  }),
  new Stock({
    symbol: 'CL=F',
    name: 'Crude Oil',
    price: 78.45,
    change: -2.65,
    changePercent: -3.27,
    volume: 485000,
    marketCap: null,
    peRatio: null,
    dividendYield: null,
    high52Week: 95.00,
    low52Week: 65.50
  }),
  new Stock({
    symbol: 'BZ=F',
    name: 'Brent Oil',
    price: 82.15,
    change: -2.85,
    changePercent: -3.35,
    volume: 325000,
    marketCap: null,
    peRatio: null,
    dividendYield: null,
    high52Week: 98.50,
    low52Week: 68.75
  })
];

export const topGainers = [
  new Stock({
    symbol: 'WGS',
    name: 'GeneDx Holdings Corp.',
    price: 79.71,
    change: 12.71,
    changePercent: 18.97,
    volume: 2500000,
    marketCap: 2100000000,
    peRatio: null,
    dividendYield: 0.0,
    high52Week: 85.00,
    low52Week: 15.50
  }),
  new Stock({
    symbol: 'ZETA',
    name: 'Zeta Global Holdings Corp.',
    price: 16.81,
    change: 2.63,
    changePercent: 18.50,
    volume: 8500000,
    marketCap: 2800000000,
    peRatio: 45.2,
    dividendYield: 0.0,
    high52Week: 18.50,
    low52Week: 8.90
  }),
  new Stock({
    symbol: 'MBLY',
    name: 'Mobileye Global Inc.',
    price: 16.42,
    change: 1.70,
    changePercent: 11.55,
    volume: 12000000,
    marketCap: 13500000000,
    peRatio: null,
    dividendYield: 0.0,
    high52Week: 28.50,
    low52Week: 12.80
  })
];

export const topLosers = [
  new Stock({
    symbol: 'HIMS',
    name: 'Hims & Hers Health, Inc.',
    price: 41.98,
    change: -22.24,
    changePercent: -34.63,
    volume: 45000000,
    marketCap: 9200000000,
    peRatio: 185.5,
    dividendYield: 0.0,
    high52Week: 75.50,
    low52Week: 8.90
  }),
  new Stock({
    symbol: 'NEGG',
    name: 'Newegg Commerce, Inc.',
    price: 10.26,
    change: -1.12,
    changePercent: -9.84,
    volume: 1800000,
    marketCap: 425000000,
    peRatio: null,
    dividendYield: 0.0,
    high52Week: 15.80,
    low52Week: 6.50
  }),
  new Stock({
    symbol: 'SMCI',
    name: 'Super Micro Computer, Inc.',
    price: 40.89,
    change: -4.43,
    changePercent: -9.77,
    volume: 28000000,
    marketCap: 2400000000,
    peRatio: 12.8,
    dividendYield: 0.0,
    high52Week: 122.90,
    low52Week: 17.25
  })
];

export default {
  stocksData,
  futuresData,
  commoditiesData,
  topGainers,
  topLosers
};

