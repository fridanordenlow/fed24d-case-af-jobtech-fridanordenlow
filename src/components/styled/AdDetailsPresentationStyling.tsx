import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1em;
  padding-bottom: 2em;
`;

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 5rem;
  margin-top: 2em;
`;

export const LeftSection = styled.section`
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const RightSection = styled.section`
  width: 75%;
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
