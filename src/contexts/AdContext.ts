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
  totalResult: number; // antal resultat på sökning
  setTotalResult: (total: number) => void;
  totalPages: number; // antal sidor
  setTotalPages: (page: number) => void;
  currentPage: number; // sida man befinner sig på
  setCurrentPage: (page: number) => void;
};

export const AdContext = createContext<AdContextType | undefined>(undefined);
