import { DigiLayoutBlock, DigiLayoutContainer, DigiTypography } from "@digi/arbetsformedlingen-react";
import type { Ad } from "../models/Ad";
import { LayoutBlockVariation } from "@digi/arbetsformedlingen";

interface Props {
  ad: Ad;
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
<DigiTypography>

        <h1>AdDetailsPresentation</h1>
        <div>
          <h2>{ad?.headline}</h2>
          <p>{ad?.employer.name}</p>
        </div>

</DigiTypography>
    </DigiLayoutContainer>
  </DigiLayoutBlock>
  </>
};
