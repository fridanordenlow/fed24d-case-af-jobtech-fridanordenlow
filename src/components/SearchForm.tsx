import { useState } from 'react';
import {
  LayoutContainerVariation,
  FormInputSearchVariation,
  FormInputType,
  ButtonType,
} from '@digi/arbetsformedlingen';
import {
  DigiLayoutContainer,
  DigiFormInputSearch,
} from '@digi/arbetsformedlingen-react';
import { useAdContext } from '../hooks/useAdContext';
import { getAds } from '../services/adService';
import { MessageWrapper } from './styled/Wrappers';

export const SearchForm = () => {
  const {
    ads,
    setAds,
    searchQuery,
    setSearchQuery,
    loading,
    setLoading,
    setError,
    setTotalResult,
    setCurrentPage,
  } = useAdContext();
  const [userInput, setUserInput] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: CustomEvent<string>) => {
    const searchValue = e.detail;
    if (!searchValue) return;
    const page = 1;

    setLoading(true);
    setSearchQuery(searchValue);
    setError(null);
    setCurrentPage(page);
    setHasSearched(true);

    try {
      const offset = (page - 1) * 10;
      const results = await getAds(searchValue, offset, 100);

      const newAds = results?.ads || [];
      setAds(newAds);

      const total = results.totalHits?.value || 0;
      setTotalResult(newAds.length === 0 ? 0 : total > 100 ? 100 : total);
    } catch (err) {
      console.error(err);
      setError('Något gick fel, försök igen.');
      setAds([]);
      setTotalResult(0);
    } finally {
      setUserInput('');
      setLoading(false);
    }
  };

  const handleInput = (e: CustomEvent) => {
    const value = (e.detail.target as HTMLInputElement).value || '';
    if (value.length > 50) return;
    setUserInput(value);
  };

  return (
    <>
      <DigiLayoutContainer
        afVariation={LayoutContainerVariation.STATIC}
        afVerticalPadding
      >
        <DigiFormInputSearch
          afLabel="Sök på ett eller flera ord"
          afVariation={FormInputSearchVariation.MEDIUM}
          afType={FormInputType.SEARCH}
          afButtonText="Sök"
          afButtonType={ButtonType.SUBMIT}
          afValue={userInput}
          onAfOnSubmitSearch={handleSearch}
          onAfOnInput={handleInput}
        ></DigiFormInputSearch>
        {hasSearched && !loading && searchQuery && ads.length > 0 && (
          <MessageWrapper>
            <p>Visar sökresultat för "{searchQuery}"</p>
          </MessageWrapper>
        )}
        {hasSearched && !loading && searchQuery && ads.length === 0 && (
          <MessageWrapper>
            <p>Inga annonser hittades för "{searchQuery}"</p>
          </MessageWrapper>
        )}
      </DigiLayoutContainer>
    </>
  );
};
