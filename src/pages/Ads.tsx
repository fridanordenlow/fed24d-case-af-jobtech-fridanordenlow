import {
  DigiLayoutContainer,
  DigiLoaderSpinner,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
// import { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
import { LoaderSpinnerSize } from '@digi/arbetsformedlingen';
import { SearchForm } from '../components/SearchForm';
import { AdsPresentation } from '../components/AdsPresentation';
import { useAdContext } from '../hooks/useAdContext';
// import type { AdsLoader } from '../loaders/adsLoader';
import { AdsPagination } from '../components/AdsPagination';
import { LoaderSpinnerWrapper } from '../components/styled/Wrappers';

export const Ads = () => {
  const { ads, loading, error } = useAdContext();
  // const loaderData = useLoaderData<AdsLoader>();
  // const { ads, setAds, setTotalResult, setCurrentPage, loading, error } =
  //   useAdContext();
  // const [hasFetched, setHasFetched] = useState(false);

  // useEffect(() => {
  //   const setInitialAds = () => {
  //     setAds(loaderData.ads);
  //     setHasFetched(true);
  //     setCurrentPage(1);
  //     if (loaderData.total.value > 100) {
  //       setTotalResult(100);
  //     } else {
  //       setTotalResult(loaderData.total.value);
  //     }
  //   };

  //   if (hasFetched) return;

  //   setInitialAds();
  // });

  return (
    <DigiLayoutContainer afNoGutter>
      <DigiTypography>
        <DigiLayoutContainer>
          <h2>Jobbannonser</h2>
        </DigiLayoutContainer>

        <SearchForm />

        <div>
          {loading && (
            <LoaderSpinnerWrapper>
              <DigiLoaderSpinner
                afSize={LoaderSpinnerSize.MEDIUM}
                afText="Laddar annonser..."
              />
            </LoaderSpinnerWrapper>
          )}

          {!loading && !error && ads.length > 0 && (
            <>
              <AdsPresentation />
              <AdsPagination />
            </>
          )}
        </div>
      </DigiTypography>
    </DigiLayoutContainer>
  );
};
