import {
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import styled from 'styled-components';

export const Welcome = () => {
  return (
    <WelcomeWrapper>
      <DigiTypography>
        <DigiLayoutContainer>
          <h3>Välkommen till Tech Reqruitments!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum qui
            natus ullam aut dolorum itaque deleniti facere, nihil possimus non
            odio deserunt ab laboriosam sint animi consequuntur, optio ut
            suscipit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellat ut adipisci ducimus laborum nihil. Porro harum ducimus
            rerum, quis aut reprehenderit consequatur enim veniam unde.
            Blanditiis molestias recusandae iusto expedita.
          </p>
        </DigiLayoutContainer>
      </DigiTypography>
    </WelcomeWrapper>
  );
};

const WelcomeWrapper = styled.div`
  border-bottom: 3px dashed #ebda39;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
`;
