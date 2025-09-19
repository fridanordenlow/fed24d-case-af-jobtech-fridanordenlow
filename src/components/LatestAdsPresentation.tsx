import { useLoaderData } from 'react-router';
import type { LatestAdsLoader } from '../loaders/latestAdsLoader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import {
  InfoCardMultiHeadingLevel,
  InfoCardMultiType,
  LayoutColumnsElement,
  LayoutColumnsGap,
  LayoutColumnsVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiInfoCardMulti,
  DigiLayoutColumns,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';

export const LatestAdsPresentation = () => {
  const { ads } = useLoaderData<LatestAdsLoader>();
  const isMobile = useMediaQuery('(max-width: 770px)');

  return (
    <DigiTypography>
      <h2>Nypublicerade annonser</h2>
      <DigiLayoutColumns
        afElement={LayoutColumnsElement.DIV}
        afVariation={
          isMobile ? LayoutColumnsVariation.ONE : LayoutColumnsVariation.TWO
        }
        afColumnGap={LayoutColumnsGap.GAP_32}
      >
        {ads.map((a) => (
          <DigiInfoCardMulti
            afHeading={a.headline}
            afHeadingLevel={InfoCardMultiHeadingLevel.H2}
            afType={InfoCardMultiType.ENTRY}
            afLinkHref={`/ads/${a.id}`}
            key={a.id}
          >
            <h3 style={{ color: '#dcdbdb' }}>{a.employer.name}</h3>
          </DigiInfoCardMulti>
        ))}
      </DigiLayoutColumns>
    </DigiTypography>
  );

  // const afHTML = (
  //   <DigiTypography>
  //     <h2>Nypublicerade annonser</h2>
  //     <DigiLayoutColumns
  //       afElement={LayoutColumnsElement.DIV}
  //       afVariation={
  //         isMobile ? LayoutColumnsVariation.ONE : LayoutColumnsVariation.TWO
  //       }
  //       afColumnGap={LayoutColumnsGap.GAP_32}
  //     >
  //       {ads.map((a) => (
  //         <DigiInfoCardMulti
  //           afHeading={a.headline}
  //           afHeadingLevel={InfoCardMultiHeadingLevel.H2}
  //           afType={InfoCardMultiType.ENTRY}
  //           afLinkHref={`/ads/${a.id}`}
  //           key={a.id}
  //         >
  //           <h3 style={{ color: '#dcdbdb' }}>{a.employer.name}</h3>
  //         </DigiInfoCardMulti>
  //       ))}
  //     </DigiLayoutColumns>
  //   </DigiTypography>
  // );

  // return <>{afHTML}</>;
};
