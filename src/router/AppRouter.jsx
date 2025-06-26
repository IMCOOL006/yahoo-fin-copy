import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout';
import { HomePage, NewsPage, MarketsPage, ResearchPage, PersonalFinancePage, VideosPage, WatchNowPage, PortfolioPage } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'news',
        element: <NewsPage />
      },
      {
        path: 'markets',
        element: <MarketsPage />
      },
      {
        path: 'research',
        element: <ResearchPage />
      },
      {
        path: 'personal-finance',
        element: <PersonalFinancePage />
      },
      {
        path: 'videos',
        element: <VideosPage />
      },
      {
        path: 'watch-now',
        element: <WatchNowPage />
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />
      }
    ]
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

