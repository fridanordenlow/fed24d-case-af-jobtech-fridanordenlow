import { DigiTypography } from '@digi/arbetsformedlingen-react';
import { NavLink } from 'react-router';
// import { Link } from 'react-router';
import styled from 'styled-components';
// import logo from '../assets/logo-small.svg';

export const Header = () => {
  return (
    <DigiTypography>
      <HeaderWrapper>
        {/* <Logo src={logo} /> */}
        {/* <img src={logo} /> */}
        {/* <Link to="/"> */}
        <div>
          <HeaderTitle>&lt;hired /&gt;</HeaderTitle>
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

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  padding: 1.5rem 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 3px dashed #ebda39;

  @media (max-width: 770px) {
    flex-direction: column;
    align-items: flex-start; /* så det inte centrar allt horisontellt */
    gap: 1rem;
  }
`;

const HeaderTitle = styled.h1`
  font-family: 'Press Start 2P', system-ui;
  font-size: 2.5rem;
  margin-bottom: 0;

  @media (max-width: 770px) {
    font-size: 2rem;
  }
`;

const HeaderTagline = styled.p`
  font-family: 'Source Code Pro', monospace;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ef5c74;
  margin-bottom: 0;

  @media (max-width: 770px) {
    font-size: 1.2rem;
  }
`;

const HeaderNav = styled.nav`
  display: flex;
  gap: 1.2rem;
  font-family: 'Source Code Pro', monospace;
  margin-bottom: 0;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1.2rem;
  /* color: #04cf00; */
  color: #ebda39;
  text-decoration: none;

  &:visited {
    /* color: #04cf00; */
    color: #ebda39;
  }

  &:hover {
    /* color: #04cf00; */
    color: #ebda39;
    text-decoration: dashed underline;
  }

  &:focus {
    /* outline: 2px solid #04cf00; */
    outline: 2px solid #ebda39;
    outline-offset: 4px;
  }

  &.active {
    /* color: #04cf00; */
    color: #ebda39;
    font-weight: bold;
  }
`;
