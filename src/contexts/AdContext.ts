import { createContext } from 'react';
import type { Ad } from '../models/Ad';

type AdContextType = {
  ads: Ad[];
  setAds: (ads: Ad[]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  currentTotal: number;
  setCurrentTotal: (total: number) => void;
};

export const AdContext = createContext<AdContextType | undefined>(undefined);
