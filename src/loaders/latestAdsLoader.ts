import type { Ad } from '../models/Ad';
import { getLatestAds } from '../services/adService';

export type LatestAdsLoader = {
  ads: Ad[];
};
export const latestAdsLoader = async () => {
  const data = await getLatestAds();

  return { ads: data } satisfies LatestAdsLoader;
};
