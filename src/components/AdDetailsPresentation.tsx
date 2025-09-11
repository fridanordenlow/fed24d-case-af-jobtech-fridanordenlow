import { DigiLayoutBlock, DigiLayoutContainer } from "@digi/arbetsformedlingen-react";
import type { AdExt } from "../models/AdExt";
import { LayoutBlockVariation } from "@digi/arbetsformedlingen";

interface Props {
  ad: AdExt;
}

export const AdDetailsPresentation = ({ad}:Props) => {
  return <>
  <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}
  style={{
    border: '2px solid red',
  }}
  >
    <DigiLayoutContainer
      af-margin-all
      style={{
        border: '2px solid blue',
      }}
    >
      <h1>AdDetailsPresentation</h1>
      <h1>{ad.headline}</h1>
      <section>
        <h2>{ad.employer.name}</h2>
        <p><strong>Plats:</strong> {ad.workplace_address.region} {ad.workplace_address.municipality}</p>
        <p><strong>Publicerad:</strong> {new Date(ad.publication_date).toLocaleDateString()}</p>
        <p><strong>Deadline:</strong> {new Date(ad.application_deadline).toLocaleDateString()}</p>
        <p><strong>Här skulle kvalifikationer vara bra, men jag hittar inte hur jag ska göra:</strong></p>
      </section>

      <section>
        <h3>Tjänstbeskrivning</h3>
        <p dangerouslySetInnerHTML={{ __html: ad.description.text_formatted }}></p>
      </section>

    </DigiLayoutContainer>
  </DigiLayoutBlock>
  </>
};
