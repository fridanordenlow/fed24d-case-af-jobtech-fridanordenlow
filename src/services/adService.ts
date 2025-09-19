import type { APIResponse } from '../models/APIResponse';
import type { AdExt } from '../models/AdExt';
import { get } from './serviceBase';

const BASE_URL = 'https://jobsearch.api.jobtechdev.se/';
const SEARCH = 'search?occupation-group=DJh5_yyF_hEM';

export const getAds = async (query: string, offset: number, limit: number) => {
  const encodedQuery = encodeURIComponent(query);
  const response = await get<APIResponse>(
    `${BASE_URL}${SEARCH}&q=${encodedQuery}&offset=${offset}&limit=${limit}`
  );

  return { ads: response.hits, totalHits: response.total };
};

export const getAdById = async (id: string): Promise<AdExt> => {
  const data = await get<AdExt>(`${BASE_URL}ad/${id}`);

  return data;
};

export const getLatestAds = async () => {
  const data = await get<APIResponse>(
    `${BASE_URL}${SEARCH}&offset=0&limit=10&sort=pubdate-desc`
  );

  return data.hits;
};

export const getTotalPos = async () => {
  const data = await get<APIResponse>(`${BASE_URL}${SEARCH}`);

  return data.total;
};
