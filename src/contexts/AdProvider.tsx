import { useEffect, useState, type ReactNode } from 'react';
import { AdContext } from './AdContext';
import type { AdExt } from '../models/AdExt';
import { getAds } from '../services/adService';

type AdProviderProps = { children: ReactNode };

export const AdProvider = ({ children }: AdProviderProps) => {
  const [ads, setAds] = useState<AdExt[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResult, setTotalResult] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    const setInitialAds = async () => {
      try {
        setLoading(true);
        setHasFetched(true);
        setCurrentPage(1);
        setError(null);
        const data = await getAds('', 0, 100);
        setAds(data.ads);
        setTotalResult(data.totalHits.value > 100 ? 100 : data.totalHits.value);
      } catch (err) {
        console.error('Error fetching ads:', err);
      } finally {
        setLoading(false);
      }
    };

    // if (hasFetched) return;
    if (!hasFetched) setInitialAds();
  }, [hasFetched]);

  return (
    <AdContext.Provider
      value={{
        ads,
        setAds,
        searchQuery,
        setSearchQuery,
        loading,
        setLoading,
        error,
        setError,
        totalResult,
        setTotalResult,
        totalPages,
        setTotalPages,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </AdContext.Provider>
  );
};
