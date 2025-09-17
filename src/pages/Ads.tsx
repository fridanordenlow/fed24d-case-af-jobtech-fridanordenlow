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

export const Ads = () => {
  const loaderData = useLoaderData<AdsLoader>(); // Get initial data from loader
  const { ads, setAds, setCurrentTotal, setCurrentPage } = useAdContext();

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

        <SearchForm />
        <div>
          {/* <DigiLayoutContainer afMarginBottom>
            <p>Visar resultat för '{searchQuery}'</p>
          </DigiLayoutContainer> */}
          <AdsPresentation />
          {/* {loading && (
            <DigiLoaderSpinner
              afSize={LoaderSpinnerSize.MEDIUM}
              afText="Laddar"
            ></DigiLoaderSpinner>
          )} */}
        </div>
        <div>
          <AdsPagination />
        </div>
      </DigiTypography>
    </DigiLayoutContainer>
  );
};
