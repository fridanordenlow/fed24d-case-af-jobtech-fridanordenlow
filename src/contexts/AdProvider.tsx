import { useState, type ReactNode } from 'react';
import type { Ad } from '../models/Ad';
import { AdContext } from './AdContext';

type AdProviderProps = { children: ReactNode };

export const AdProvider = ({ children }: AdProviderProps) => {
  const [ads, setAds] = useState<Ad[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResult, setTotalResult] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

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
