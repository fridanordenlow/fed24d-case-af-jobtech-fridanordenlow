import { useContext } from 'react';
import { AdContext } from '../contexts/AdContext';

export const useAdContext = () => {
  const context = useContext(AdContext);

  if (context === undefined) {
    throw new Error('Nåt gick fel');
  }

  return context;
};
