import { useEffect, useState } from "react";
import type { Ad } from "../models/Ad";
import { getAdById } from "../services/adService";
import { useParams } from "react-router";
import { AdDetailsPresentation } from "../components/AdDetailsPresentation";

export const AdDetails = () => {
  const [ad, setAd] = useState<Ad>();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      if (id) {
        const ads = await getAdById(id);
        setAd(ads);
      }
      return;
    };

    if (ad) return;

    getData();
  }, [id]);

  if (!ad) return <p>Kunde inte hitta annonsen.</p>;
  return (
    <AdDetailsPresentation ad={ad}/>
  );
};
