import { DigiLayoutBlock } from '@digi/arbetsformedlingen-react';
import { useLoaderData } from 'react-router';
import type { AdsLoader } from '../loaders/adsLoader';

export const AdsPresentation = () => {
  const { ads } = useLoaderData<AdsLoader>();
  return (
    <>
      <DigiLayoutBlock></DigiLayoutBlock>;
    </>
  );
};
