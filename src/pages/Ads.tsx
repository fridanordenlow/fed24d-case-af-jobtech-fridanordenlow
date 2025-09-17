import {
  DigiLayoutContainer,
  // DigiLoaderSpinner,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
// import { LoaderSpinnerSize } from '@digi/arbetsformedlingen';
import { SearchForm } from '../components/SearchForm';
import { AdsPresentation } from '../components/AdsPresentation';
import { useAdContext } from '../contexts/useAdContext';
import type { AdsLoader } from '../loaders/adsLoader';
import { AdsPagination } from '../components/AdsPagination';
// import styled from 'styled-components';

export const Ads = () => {
  const loaderData = useLoaderData<AdsLoader>(); // Get initial data from loader
  const { ads, setAds, setCurrentTotal, setCurrentPage } = useAdContext(); // Custom hook for context

  useEffect(() => {
    const setInitialAds = () => {
      setAds(loaderData.ads);
      setCurrentPage(1);
      if (loaderData.total.value > 100) {
        setCurrentTotal(100);
      } else {
        setCurrentTotal(loaderData.total.value);
      }
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
      {/* {loading && (
        <DigiLoaderSpinner
          afSize={LoaderSpinnerSize.MEDIUM}
          afText="Laddar"
        ></DigiLoaderSpinner>
      )} */}
      {/* <PaginationWrapper> */}
      <AdsPagination />
      {/* </PaginationWrapper> */}
    </DigiLayoutContainer>
  );
};

// const PaginationWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   width: fit-content;
//   padding: 0;
//   margin-top: 40px;
// `;
