import {
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { Search } from '../components/Search';

export const Ads = () => {
  return (
    <DigiLayoutContainer afNoGutter afVerticalPadding>
      <DigiTypography>
        <h2>Search and Result</h2>
      </DigiTypography>
      <Search />
    </DigiLayoutContainer>
  );
};
