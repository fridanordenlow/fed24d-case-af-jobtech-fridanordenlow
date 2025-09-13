import type { Ad } from '../models/Ad';
import { getAds } from '../services/adService';

export type AdsLoader = {
  ads: Ad[];
};
export const adsLoader = async () => {
  const data = await getAds('');

  return { ads: data } satisfies AdsLoader;
};
