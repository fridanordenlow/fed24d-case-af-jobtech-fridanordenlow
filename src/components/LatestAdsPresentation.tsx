import { useEffect, useState } from "react";
import type { Ad } from "../models/Ad";
import { getLatestAds } from "../services/adService";
import { Link } from "react-router";
import {
  LayoutColumnsElement,
  LayoutColumnsVariation,
  TypographyVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiLayoutColumns,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";

export const LatestAdsPresentation = () => {
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    const getData = async () => {
      const ads = await getLatestAds();
      setAds(ads);
    };

    if (ads.length > 0) return;

    getData();
  });

  const newHTML = ads.map((a) => (
    <div
      key={a.id}
      style={{
        border: "1px solid black",
        background: "lightgrey",
        padding: "5px",
      }}
    >
      <Link to={`/ads/${a.id}`}>
        <h3>{a.headline}</h3>
      </Link>
      <p>{a.employer.name}</p>
    </div>
  ));

  return (
    <DigiTypography afVariation={TypographyVariation.SMALL}>
      <DigiLayoutColumns
        afElement={LayoutColumnsElement.DIV}
        afVariation={LayoutColumnsVariation.TWO}
      >
        {newHTML}
      </DigiLayoutColumns>
    </DigiTypography>
  );
};
