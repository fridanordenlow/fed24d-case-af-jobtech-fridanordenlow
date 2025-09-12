import { Link, useLoaderData } from 'react-router';
import {
  LayoutColumnsElement,
  LayoutColumnsVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiLayoutColumns,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import type { LatestAdsLoader } from '../loaders/latestAdsLoader';

export const LatestAdsPresentation = () => {
  const { ads } = useLoaderData<LatestAdsLoader>();

  const newHTML = ads.map((a) => (
    <Link to={`/ads/${a.id}`} key={a.id}>
      <h3>{a.headline}</h3>
      <p>{a.employer.name}</p>
    </Link>
  ));

  return (
    <DigiTypography>
      <DigiLayoutColumns
        afElement={LayoutColumnsElement.DIV}
        afVariation={LayoutColumnsVariation.TWO}
      >
        {newHTML}
      </DigiLayoutColumns>
    </DigiTypography>
  );
};
