import THUMBNAIL from '../assets/thumbnail.jpg';

export const videoData = [
  {
    id: 1,
    title: "Nvidia nears record highs: How to play AI momentum",
    image: THUMBNAIL,
    duration: "04:17",
    meta: "Yahoo Finance Video · 1h ago",
    tickers: [
      { symbol: "NVDA", change: "+3.28%", positive: true },
      { symbol: "AMD", change: "+3.19%", positive: true },
    ],
  },
  {
    id: 2,
    title: "HPE CEO talks Nvidia AI partnership, IT spend, Juniper trial",
    image: THUMBNAIL,
    duration: "04:02",
    meta: "Yahoo Finance Video · 1h ago",
    tickers: [
      { symbol: "HPE", change: "+1.59%", positive: true },
      { symbol: "JNPR", change: "-0.16%", positive: false },
    ],
  },
  {
    id: 3,
    title: "Israel-Iran truce sending a 'clear, bearish signal' to oil market",
    image: THUMBNAIL,
    duration: "03:14",
    meta: "Yahoo Finance Video · 1h ago",
    tickers: [
      { symbol: "BZ-F", change: "+1.63%", positive: true },
      { symbol: "CL-F", change: "+2.13%", positive: true },
    ],
  },
  {
    id: 4,
    title: "Stocks to watch today: QuantumScape, Robinhood...",
    image: THUMBNAIL,
    duration: "01:49",
    meta: "Yahoo Finance Video · 2h ago",
    tickers: [
      { symbol: "QS", change: "+30.72%", positive: true },
      { symbol: "HOOD", change: "+0.44%", positive: true },
    ],
  },
]; 