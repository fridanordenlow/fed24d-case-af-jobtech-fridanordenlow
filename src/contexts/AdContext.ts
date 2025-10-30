import { createContext } from 'react';
// import type { Ad } from '../models/Ad';
import type { AdExt } from '../models/AdExt';

type AdContextType = {
  // ads: Ad[];
  // setAds: (ads: Ad[]) => void;
  ads: AdExt[];
  setAds: (ads: AdExt[]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  totalResult: number;
  setTotalResult: (total: number) => void;
  totalPages: number;
  setTotalPages: (page: number) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

export const AdContext = createContext<AdContextType | undefined>(undefined);
