import {
  DigiLayoutBlock,
  DigiLayoutColumns,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import type { AdExt } from '../models/AdExt';
import {
  LayoutBlockVariation,
  LayoutColumnsElement,
  LayoutColumnsVariation,
  TypographyVariation,
} from '@digi/arbetsformedlingen';

interface Props {
  ad: AdExt;
}

export const AdDetailsPresentation = ({ ad }: Props) => {
  return (
    <>
      <DigiLayoutBlock
        afVariation={LayoutBlockVariation.PRIMARY}
        style={{
          border: '2px solid red',
        }}
      >
        <h1>AdDetailsPresentation</h1>

        <DigiLayoutContainer af-margin-all>
          <DigiLayoutColumns afVariation={LayoutColumnsVariation.TWO}>
            <div style={{ flex: '1 0 25%', border: '2px solid blue' }}>
              <DigiTypography afVariation={TypographyVariation.SMALL}>
                <section>
                  <h1>{ad.headline}</h1>
                  <h2>{ad.employer.name}</h2>
                  <p>
                    <strong>Plats:</strong> {ad.workplace_address.region}{' '}
                    {ad.workplace_address.municipality}
                  </p>
                  <p>
                    <strong>Publicerad:</strong>{' '}
                    {new Date(ad.publication_date).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Deadline:</strong>{' '}
                    {new Date(ad.application_deadline).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>
                      Här skulle kvalifikationer vara bra, men jag hittar inte
                      hur jag ska göra:
                    </strong>
                  </p>
                </section>
              </DigiTypography>
            </div>

            <div style={{ flex: '1 0 75%', border: '2px solid red' }}>
              <DigiTypography afVariation={TypographyVariation.SMALL}>
                <section>
                  <h3>Tjänstbeskrivning</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: ad.description.text_formatted,
                    }}
                  ></p>
                </section>
              </DigiTypography>
            </div>
          </DigiLayoutColumns>
        </DigiLayoutContainer>
      </DigiLayoutBlock>
    </>
  );
};
