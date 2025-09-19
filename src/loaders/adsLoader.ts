import type { Ad } from '../models/Ad';
import { getAds } from '../services/adService';

export type AdsLoader = {
  ads: Ad[];
  total: {
    value: number;
  };
};

export const adsLoader = async () => {
  const data = await getAds('', 0, 100);

  return { ads: data.ads, total: data.totalHits } satisfies AdsLoader;
};
