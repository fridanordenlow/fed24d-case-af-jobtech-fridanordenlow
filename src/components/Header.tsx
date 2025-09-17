import { DigiTypography } from '@digi/arbetsformedlingen-react';
import {
  HeaderWrapper,
  HeaderTitle,
  HeaderTagline,
  HeaderNav,
  StyledNavLink,
} from './styled/HeaderStyling';
// import logo from '../assets/logo-small.svg';

export const Header = () => {
  return (
    <DigiTypography>
      <HeaderWrapper>
        {/* <Logo src={logo} /> */}
        {/* <img src={logo} /> */}
        {/* <Link to="/"> */}
        <div>
          <HeaderTitle>&lt;techReq /&gt;</HeaderTitle>
          {/* <HeaderTitle>&lt;hired /&gt;</HeaderTitle> */}
          {/* <h3>Find your next dev</h3> */}
          <HeaderTagline>
            {/* Find your next dev =&gt; */}
            findYourNextDev()
            {/* const FindYourNextDev = () =&gt; &#123;&#125;;{' '} */}
          </HeaderTagline>
        </div>
        {/* </Link> */}
        <HeaderNav>
          <StyledNavLink to="/">Hem</StyledNavLink>
          <StyledNavLink to="/ads">Sök jobb</StyledNavLink>
        </HeaderNav>
      </HeaderWrapper>
    </DigiTypography>
  );
};
