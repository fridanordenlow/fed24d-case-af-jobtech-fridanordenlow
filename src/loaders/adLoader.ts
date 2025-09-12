import type { LoaderFunctionArgs } from 'react-router';
import { getAdById } from '../services/adService';
import type { AdExt } from '../models/AdExt';

export type AdLoader = {
  ad: AdExt;
};
export const adLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  if (!id) {
    throw new Error('ID parameter is required');
  }
  const data = await getAdById(id);
  return { ad: data } satisfies AdLoader;
};
