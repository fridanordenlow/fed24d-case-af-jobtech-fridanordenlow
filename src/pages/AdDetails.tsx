import { useEffect, useState } from "react";
import type { Ad } from "../models/Ad";
import { getAdById } from "../services/adService";
import { useParams } from "react-router";

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
  });
  return (
    <div>
      <h2>AdDetails</h2>
      <h3>{ad?.headline}</h3>
      <p>{ad?.employer.name}</p>
    </div>
  );
};
