import { useLoaderData } from 'react-router';
import { AdDetailsPresentation } from '../components/AdDetailsPresentation';
import type { AdLoader } from '../loaders/adLoader';

export const AdDetails = () => {
  const { ad } = useLoaderData<AdLoader>();

  if (!ad) return;
  return <AdDetailsPresentation ad={ad} />;
};
