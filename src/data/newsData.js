import { NewsArticle } from '../service/NewsArticle.js';

export const newsData = [
  new NewsArticle({
    id: 1,
    title: "US stocks set for gains as Trump urges Israel to save truce",
    summary: "Trump tells Israel to stop dropping bombs on Iran as ceasefire comes under pressure.",
    content: "US stock futures pointed to gains at the open as President Trump urged Israel to maintain the ceasefire agreement...",
    author: "Yahoo Finance",
    publishedAt: new Date(Date.now() - 25 * 60 * 1000), 
    imageUrl: "/api/placeholder/400/250",
    source: "Yahoo Finance",
    category: "Markets",
    relatedStocks: ["^GSPC", "^DJI", "^IXIC"]
  }),
  new NewsArticle({
    id: 2,
    title: "Powell to tell Congress Fed can 'wait' as Trump amps up pressure",
    summary: "Federal Reserve Chair Jerome Powell is expected to tell lawmakers the central bank can afford to be patient on rate cuts.",
    content: "Federal Reserve Chair Jerome Powell will tell Congress that the central bank can afford to wait before cutting interest rates...",
    author: "Reuters",
    publishedAt: new Date(Date.now() - 28 * 60 * 1000), 
    imageUrl: "/api/placeholder/400/250",
    source: "Reuters",
    category: "Economy",
    relatedStocks: ["^GSPC", "^DJI"]
  }),
  new NewsArticle({
    id: 3,
    title: "Tesla's valuation looks 'insane,' strategist says",
    summary: "Yahoo Finance's Josh Lipton reports on Tesla's recent stock performance and analyst opinions.",
    content: "Tesla's stock has surged in recent sessions, but some analysts are questioning whether the valuation is sustainable...",
    author: "Josh Lipton",
    publishedAt: new Date(Date.now() - 45 * 60 * 1000), 
    imageUrl: "/api/placeholder/400/250",
    source: "Yahoo Finance",
    category: "Stocks",
    relatedStocks: ["TSLA"]
  }),
  new NewsArticle({
    id: 4,
    title: "Former Tesla, Google engineers raise $4 million for AI-text detection startup Pangram",
    summary: "A new startup founded by former Tesla and Google engineers has raised $4 million to develop AI text detection technology.",
    content: "Pangram, a startup founded by former engineers from Tesla and Google, has successfully raised $4 million in seed funding...",
    author: "TechCrunch",
    publishedAt: new Date(Date.now() - 7 * 60 * 1000), 
    source: "TechCrunch",
    category: "Technology",
    relatedStocks: ["TSLA", "GOOGL"]
  }),
  new NewsArticle({
    id: 5,
    title: "McDonald's, Krispy Kreme to end US donut sale partnership as costs mount",
    summary: "McDonald's and Krispy Kreme are ending their donut partnership in the US due to rising operational costs.",
    content: "McDonald's Corporation and Krispy Kreme have announced they will be ending their donut sales partnership...",
    author: "Reuters",
    publishedAt: new Date(Date.now() - 9 * 60 * 1000),
    imageUrl: "/api/placeholder/400/250",
    source: "Reuters",
    category: "Business",
    relatedStocks: ["MCD", "DNUT"]
  }),
  new NewsArticle({
    id: 6,
    title: "Amazon Plans to Invest Nearly $55B in UK, Expanding Infrastructure",
    summary: "Amazon announces massive investment in UK infrastructure as part of its European expansion strategy.",
    content: "Amazon has announced plans to invest nearly $55 billion in the United Kingdom over the next decade...",
    author: "Bloomberg",
    publishedAt: new Date(Date.now() - 2 * 60 * 1000),
    imageUrl: "/api/placeholder/400/250",
    source: "Bloomberg",
    category: "Business",
    relatedStocks: ["AMZN"]
  }),
  new NewsArticle({
    id: 7,
    title: "Tesla Stock Extends Robotaxi Rally After 8% Jump Monday",
    summary: "Tesla shares continue their upward momentum following positive robotaxi developments and investor optimism.",
    content: "Tesla Inc. shares extended their rally for a second consecutive session, building on Monday's 8% gain...",
    author: "Bloomberg",
    publishedAt: new Date(Date.now() - 15 * 60 * 1000),
    imageUrl: "/api/placeholder/400/250",
    source: "Bloomberg",
    category: "Stocks",
    relatedStocks: ["TSLA"]
  }),
  new NewsArticle({
    id: 8,
    title: "Powell says Fed can wait to reduce interest rates as Trump demands immediate cuts",
    summary: "Federal Reserve Chair signals patience on rate cuts despite political pressure for immediate action.",
    content: "Federal Reserve Chair Jerome Powell indicated the central bank can afford to be patient with interest rate cuts...",
    author: "Associated Press Finance",
    publishedAt: new Date(Date.now() - 39 * 60 * 1000), 
    imageUrl: "/api/placeholder/400/250",
    source: "Associated Press Finance",
    category: "Economy",
    relatedStocks: ["^GSPC", "^DJI"]
  }),
  new NewsArticle({
    id: 9,
    title: "Goldman CEO urges Europe to review 'overbearing' regulations in French opinion piece",
    summary: "Goldman Sachs CEO calls for regulatory reform in Europe to boost competitiveness and innovation.",
    content: "Goldman Sachs Chief Executive Officer urged European policymakers to reconsider what he called 'overbearing' regulations...",
    author: "Reuters",
    publishedAt: new Date(Date.now() - 33 * 60 * 1000), 
    source: "Reuters",
    category: "Finance",
    relatedStocks: ["GS"]
  }),
  new NewsArticle({
    id: 10,
    title: "How Fred Smith built FedEx into the world's largest cargo airline",
    summary: "A look at the visionary leadership that transformed FedEx into a global logistics powerhouse.",
    content: "Fred Smith's vision and leadership transformed Federal Express from a startup idea into the world's largest cargo airline...",
    author: "FreightWaves",
    publishedAt: new Date(Date.now() - 35 * 60 * 1000), 
    imageUrl: "/api/placeholder/400/250",
    source: "FreightWaves",
    category: "Business",
    relatedStocks: ["FDX"]
  })
];

export default newsData;

