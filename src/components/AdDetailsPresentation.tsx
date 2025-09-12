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
            <div
              style={{
                display: 'flex',
                width: '100%',
                gap: '5rem',
                marginTop: '2em',
              }}
            >
              <div style={{ width: '25%' }}>
                <DigiTypography afVariation={TypographyVariation.SMALL}>
                  <section>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5em',
                      }}
                    >
                      {ad.workplace_address?.municipality &&
                        ad.workplace_address?.region && (
                          <p>
                            <strong>Plats:</strong>{' '}
                            {ad.workplace_address.municipality} i{' '}
                            {ad.workplace_address.region}
                          </p>
                        )}

                      {ad.occupation_field?.label && (
                        <p>
                          <strong>Yrkesområde:</strong>{' '}
                          {ad.occupation_field.label}
                        </p>
                      )}
                      {ad.occupation_group?.label && (
                        <p>
                          <strong>Yrkesgrupp:</strong>{' '}
                          {ad.occupation_group.label}
                        </p>
                      )}

                      {ad.employment_type?.label && (
                        <p>
                          <strong>Anställningstyp:</strong>{' '}
                          {ad.employment_type.label}
                        </p>
                      )}

                      {ad.working_hours_type?.label && (
                        <p>
                          <strong>Arbetstid:</strong>{' '}
                          {ad.working_hours_type.label}
                        </p>
                      )}

                      {ad.experience_required && (
                        <p>
                          <strong>Yrkeserfarenhet krävs:</strong> Ja
                        </p>
                      )}
                      {typeof ad.driving_license_required === 'boolean' && (
                        <p>
                          <strong>Körkort krävs:</strong>{' '}
                          {ad.driving_license_required ? 'Ja' : 'Nej'}
                        </p>
                      )}

                      {ad.application_contacts?.length ? (
                        <div>
                          <h3>Kontaktperson</h3>
                          {ad.application_contacts.map((contact, index) => (
                            <div key={index}>
                              {contact.name && (
                                <p>
                                  <strong>{contact.name}</strong>
                                </p>
                              )}
                              {contact.description && (
                                <p>{contact.description}</p>
                              )}
                              {contact.email && (
                                <p>
                                  <strong>Email:</strong> {contact.email}
                                </p>
                              )}
                              {contact.telephone && (
                                <p>
                                  <strong>Telefon:</strong> {contact.telephone}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {ad.publication_date && (
                        <p>
                          <strong>Publicerad:</strong>{' '}
                          {new Date(ad.publication_date).toLocaleDateString()}
                        </p>
                      )}

                      {ad.application_deadline && (
                        <p>
                          <strong>Deadline:</strong>{' '}
                          {new Date(
                            ad.application_deadline
                          ).toLocaleDateString()}
                        </p>
                      )}

                      {ad.application_details?.url && (
                        <p>
                          <strong>Ansökan:</strong>{' '}
                          <a
                            href={ad.application_details.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {ad.application_details.url}
                          </a>
                        </p>
                      )}
                    </div>
                  </section>
                </DigiTypography>
              </div>

              <div style={{ width: '1px', backgroundColor: 'gray' }}></div>

              <div style={{ width: '75%' }}>
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
