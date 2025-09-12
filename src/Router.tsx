import { createBrowserRouter } from 'react-router';
import { Layout } from './pages/Layout';
import { Error } from './pages/Error';
import { Home } from './pages/Home';
import { Ads } from './pages/Ads';
import { AdDetails } from './pages/AdDetails';
import { latestAdsLoader } from './loaders/latestAdsLoader';
import { adsLoader } from './loaders/adsLoader';
import { adLoader } from './loaders/adLoader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        loader: latestAdsLoader,
        element: <Home />,
      },
      { path: '/ads', loader: adsLoader, element: <Ads /> },
      { path: '/ads/:id', loader: adLoader, element: <AdDetails /> },
    ],
  },
]);
