import { DigiTypography } from '@digi/arbetsformedlingen-react';
import {
  HeaderWrapper,
  HeaderTitle,
  HeaderTagline,
  HeaderNav,
  StyledNavLink,
} from './styled/HeaderStyling';

export const Header = () => {
  return (
    <DigiTypography>
      <HeaderWrapper>
        <div>
          <HeaderTitle>&lt;techReq /&gt;</HeaderTitle>
          <HeaderTagline>findYourNextDev()</HeaderTagline>
        </div>
        <HeaderNav>
          <StyledNavLink to="/">Hem</StyledNavLink>
          <StyledNavLink to="/ads">Sök jobb</StyledNavLink>
        </HeaderNav>
      </HeaderWrapper>
    </DigiTypography>
  );
};
