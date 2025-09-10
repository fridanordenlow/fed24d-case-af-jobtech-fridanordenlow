import styled from 'styled-components';
// Maybe implement styled components wrappers later
// For now using index.css for global styles

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100dvh;
`;

export const AdsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 1rem;
  gap: 0.5rem;
`;

export const AdWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 30%;
`;
