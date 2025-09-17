import {
  DigiLayoutContainer,
  DigiLoaderSpinner,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { LoaderSpinnerSize } from '@digi/arbetsformedlingen';
import { SearchForm } from '../components/SearchForm';
import { AdsPresentation } from '../components/AdsPresentation';
import { useAdContext } from '../contexts/useAdContext';
import type { AdsLoader } from '../loaders/adsLoader';
import { AdsPagination } from '../components/AdsPagination';

export const Ads = () => {
  const loaderData = useLoaderData<AdsLoader>(); // Get initial data from loader
  const { ads, setAds, loading } = useAdContext(); // Custom hook for context

  useEffect(() => {
    const setInitialAds = () => {
      setAds(loaderData.ads);
    };

    if (!loaderData?.ads.length || ads.length > 0) return;

    setInitialAds();
  });

  return (
    <DigiLayoutContainer afNoGutter>
      <DigiTypography>
        <DigiLayoutContainer>
          <h2>Jobbannonser</h2>
        </DigiLayoutContainer>
      </DigiTypography>
      <SearchForm />
      <AdsPresentation />
      <AdsPagination />
      {loading && (
        <DigiLoaderSpinner
          afSize={LoaderSpinnerSize.MEDIUM}
          afText="Laddar"
        ></DigiLoaderSpinner>
      )}
    </DigiLayoutContainer>
  );
};
