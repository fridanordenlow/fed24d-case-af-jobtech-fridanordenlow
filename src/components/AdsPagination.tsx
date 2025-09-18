import { DigiNavigationPagination } from '@digi/arbetsformedlingen-react';
import { useLoaderData } from 'react-router';
import { useAdContext } from '../hooks/useAdContext';
import type { AdsLoader } from '../loaders/adsLoader';

export const AdsPagination = () => {
  const loaderData = useLoaderData<AdsLoader>();
  const { setCurrentPage, currentPage, currentTotal } = useAdContext();
  const startValue = currentPage * 10 - 9;

  const handlePagination = (e: CustomEvent) => {
    if (e.detail === null) {
      setCurrentPage(1);
      return;
    } else {
      console.log(loaderData.total.value);
      console.log(currentTotal);
      setCurrentPage(e.detail);
    }
  };
  return (
    <DigiNavigationPagination
      afId="afPagination"
      afTotalPages={Math.ceil(currentTotal / 10)}
      afInitActive-page={1}
      afCurrentResultStart={startValue}
      afCurrentResultEnd={startValue + 9}
      afTotalResults={currentTotal}
      afResultName="annonser"
      onAfOnReady={handlePagination}
      onAfOnPageChange={handlePagination}
    ></DigiNavigationPagination>
  );
};
