import type { Ad } from '../models/Ad';
import { getAdsNew } from '../services/adService';

export type AdsLoader = {
  ads: Ad[];
  total: {
    value: number;
  };
};

export const adsLoader = async () => {
  const data = await getAdsNew('', 0, 100);

  return { ads: data.ads, total: data.totalHits } satisfies AdsLoader;
};
