import {
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { WelcomeWrapper } from './styled/Wrappers';

export const Welcome = () => {
  return (
    <WelcomeWrapper>
      <DigiTypography>
        <DigiLayoutContainer>
          <h3>Välkommen till Tech Reqruitments!</h3>
          <p>
            På Tech Reqruitments kan du enkelt söka bland lediga jobb inom IT
            och mjukvaruutveckling. Vi listar alla lediga jobb på platsbanken,
            utan att du får irrelevanta sökträffar.
          </p>

          <p>
            Nedan ser du de tio senast inkomna jobben så du enkelt kan vara
            första kandidat att söka nyutlagda jobb. På söksidan kan du
            fritextsöka för att hitta annonser som matchar dina intressen och
            din ort.
          </p>

          <p>Gå in på sök jobb och upptäck de jobb som passar dig bäst!</p>
        </DigiLayoutContainer>
      </DigiTypography>
    </WelcomeWrapper>
  );
};
