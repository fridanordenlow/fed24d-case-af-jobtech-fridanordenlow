import { useEffect, useState } from "react";
import type { Ad } from "../models/Ad";
import { getAds, getLatestAds } from "../services/adService";
import { Link } from "react-router";

export const Home = () => {
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    const getData = async () => {
      const ads = await getLatestAds();
      setAds(ads);
    };

    if (ads.length > 0) return;

    getData();
  });
  return (
    <div>
      <h2>Home</h2>
      {ads.map((a) => (
        <div key={a.id}>
          <Link to={`/ads/${a.id}`}>
            <h3>{a.headline}</h3>
            <p>{a.employer.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
