import { useLoaderData } from 'react-router';
import { AdDetailsPresentation } from '../components/AdDetailsPresentation';
import type { AdLoader } from '../loaders/adLoader';

export const AdDetails = () => {
  const { ad } = useLoaderData<AdLoader>();

  if (!ad) return <p>Kunde inte hitta annonsen.</p>;
  return <AdDetailsPresentation ad={ad} />;
};
