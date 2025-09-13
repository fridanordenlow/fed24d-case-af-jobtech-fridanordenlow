import { useLoaderData } from 'react-router';
import {
  InfoCardMultiHeadingLevel,
  InfoCardMultiType,
  LayoutColumnsElement,
  LayoutColumnsVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiInfoCardMulti,
  DigiLayoutColumns,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import type { LatestAdsLoader } from '../loaders/latestAdsLoader';

export const LatestAdsPresentation = () => {
  const { ads } = useLoaderData<LatestAdsLoader>();

  const afHTML = (
    <DigiTypography>
      <DigiLayoutColumns
        afElement={LayoutColumnsElement.DIV}
        afVariation={LayoutColumnsVariation.TWO}
      >
        {ads.map((a) => (
          <DigiInfoCardMulti
            afHeading={a.headline}
            afHeadingLevel={InfoCardMultiHeadingLevel.H2}
            afType={InfoCardMultiType.RELATED}
            afLinkHref={`/ads/${a.id}`}
            key={a.id}
          >
            <p>{a.employer.name}</p>
          </DigiInfoCardMulti>
        ))}
      </DigiLayoutColumns>
    </DigiTypography>
  );

  return <>{afHTML}</>;
};
