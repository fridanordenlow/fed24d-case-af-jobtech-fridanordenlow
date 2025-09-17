import { DigiNavigationPagination } from '@digi/arbetsformedlingen-react';
import { useLoaderData } from 'react-router';
import { useAdContext } from '../contexts/useAdContext';
import type { AdsLoader } from '../loaders/adsLoader';

export const AdsPagination = () => {
  const loaderData = useLoaderData<AdsLoader>(); // Get initial data from loader
  const { setCurrentPage, currentPage } = useAdContext(); // Custom hook for context
  const startValue = currentPage * 10 - 9;

  const handlePagination = (e: CustomEvent) => {
    if (e.detail == null) {
      setCurrentPage(1);
      return;
    } else {
      setCurrentPage(e.detail);
    }
  };
  return (
    <DigiNavigationPagination
      afId="afPagination"
      afTotalPages={10}
      afInitActive-page={1}
      afCurrentResultStart={startValue}
      afCurrentResultEnd={startValue + 9}
      afTotalResults={100}
      afResultName="annonser"
      onAfOnReady={handlePagination}
      onAfOnPageChange={handlePagination}
    ></DigiNavigationPagination>
  );
};
