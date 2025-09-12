import { useEffect, useState } from 'react';
import type { AdExt } from '../models/AdExt';
import { getAdById } from '../services/adService';
import { useParams } from 'react-router';
import { AdDetailsPresentation } from '../components/AdDetailsPresentation';

export const AdDetails = () => {
  const [ad, setAd] = useState<AdExt | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) return;

    const getData = async () => {
      try {
        const adData = await getAdById(id);
        setAd(adData);
      } catch (error) {
        console.error('Kunde inte hämta annons:', error);
      }
    };

    getData();
  }, [id]);

  if (!ad) return <p>Kunde inte hitta annonsen.</p>;
  return <AdDetailsPresentation ad={ad} />;
};
