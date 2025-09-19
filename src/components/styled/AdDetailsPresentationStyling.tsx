import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 2em;
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 4rem;
  margin-top: 2em;
`;

export const LeftSection = styled.section`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const RightSection = styled.section`
  width: 65%;
`;

export const Divider = styled.div`
  width: 1px;
  background-color: gray;
`;

export const InfoSection = styled.section<{ bgColor?: string }>`
  width: 100%;
  padding-bottom: 1.5em;

  p {
    margin: 0.25em 0;
  }

  div {
    margin: 0.1em 0;
  }

  h3 {
    margin-top: 0.5em;
    margin-bottom: 0.25em;
  }
`;
