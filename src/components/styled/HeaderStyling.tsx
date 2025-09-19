import { NavLink } from 'react-router';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  padding: 1.5rem 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 3px dashed #ebda39;

  @media (max-width: 770px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const HeaderTitle = styled.h1`
  font-family: 'Press Start 2P', system-ui;
  font-size: 2.2rem;
  margin-bottom: 0;

  @media (max-width: 770px) {
    font-size: 1.6rem;
  }
`;

export const HeaderTagline = styled.p`
  font-family: 'Source Code Pro', monospace;
  font-size: 1.4rem;
  font-weight: 600;
  color: #ef5c74;
  margin-bottom: 0;

  @media (max-width: 770px) {
    font-size: 1.2rem;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 1.2rem;
  font-family: 'Source Code Pro', monospace;
  margin-bottom: 0;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 1.2rem;
  color: #ebda39;
  text-decoration: none;

  &:visited {
    color: #ebda39;
  }

  &:hover {
    color: #ebda39;
    text-decoration: dashed underline;
  }

  &:focus {
    outline: 2px solid #ebda39;
    outline-offset: 4px;
  }

  &.active {
    color: #ebda39;
    font-weight: bold;
  }

  @media (max-width: 770px) {
    font-size: 1rem;
  }
`;
