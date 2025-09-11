import {
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import type { AdExt } from '../models/AdExt';
import {
  LayoutBlockVariation,
  TypographyVariation,
} from '@digi/arbetsformedlingen';

interface Props {
  ad: AdExt;
}

export const AdDetailsPresentation = ({ ad }: Props) => {
  return (
    <>
      <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
        <div
          style={{
            padding: '1em',
            backgroundColor: 'lightgreen',
            border: '2px solid red',
          }}
        >
          <DigiTypography afVariation={TypographyVariation.LARGE}>
            <h1>{ad.headline}</h1>
            <h2>{ad.employer.name}</h2>
          </DigiTypography>
          <DigiLayoutContainer af-margin-all>
            <div style={{ display: 'flex', width: '100%',  gap: '5rem', marginTop: '2em',}}>
              <div style={{ width: '25%'}}>
                <DigiTypography afVariation={TypographyVariation.SMALL}>
                  <section>
                    <p>
                      <strong>Plats:</strong> {ad.workplace_address.municipality}{' i '}
                      {ad.workplace_address.region}
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

              <div style={{ width: '1px', backgroundColor: 'gray' }}></div>

              <div style={{ width: '75%'}}>
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
            </div>
          </DigiLayoutContainer>
        </div>
      </DigiLayoutBlock>
    </>
  );
};
