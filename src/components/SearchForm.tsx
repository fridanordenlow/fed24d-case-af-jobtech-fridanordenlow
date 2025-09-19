import { useEffect, useState } from 'react';
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
    totalResult,
    setTotalResult,
    setCurrentPage,
  } = useAdContext();
  const [userInput, setUserInput] = useState(searchQuery);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: CustomEvent<string>) => {
    const searchValue = e.detail;
    if (!searchValue) return; // Prevent empty searches

    const page = 1;

    setLoading(true);
    setSearchQuery(searchValue);
    setError(null);
    setCurrentPage(page);
    setHasSearched(true);
    // setAds([]);
    // setTotalResult(0);  

    try {
      const offset = (page - 1) * 10;
      const results = await getAds(searchValue, offset, 100);

      const newAds = results?.ads || [];
      setAds(newAds);

      const total = results.totalHits?.value || 0;
      setTotalResult(newAds.length === 0 ? 0 : total > 100 ? 100 : total);

      // // setAds(results.ads);
      // if (results.totalHits.value > 100) {
      //   setTotalResult(100);
      // } else {
      //   setTotalResult(results.totalHits?.value || 0);
      //   // setTotalResult(results.totalHits.value);
      // }
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

 
  useEffect(() => {
    console.log({ totalResult, searchQuery, ads: ads.length });
  }, [totalResult, ads, searchQuery]);

  const handleInput = (e: CustomEvent) => {
    const value = (e.detail.target as HTMLInputElement).value || '';
    if (value.length > 50) return;
    setUserInput(value);
  };

  // const handleFilter = async (e: CustomEvent) => {
  //   console.log(e.detail.listItems, e.detail.checked);
  //   switch (e.detail.checked[0]) {
  //     case 'omr1':
  //       setFilterInput('municipality=AvNB_uwa_6n6&');
  //       console.log(filterInput + currentSearch);
  //       break;
  //     case 'omr2':
  //       setFilterInput('municipality=PVZL_BQT_XtL&');
  //       break;
  //     case 'omr3':
  //       setFilterInput('municipality=oYPt_yRA_Smm&');
  //       break;
  //   }
  // };

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
        {/* <DigiFormFilter
          afFilterButtonText="Filter"
          afSubmitButtonText="Filtrera"
          afName="Legend text"
          onAfSubmitFilter={handleFilter}
          afListItems={[
            { id: 'omr1', label: 'Stockholm' },
            { id: 'omr2', label: 'Göteborg' },
            { id: 'omr3', label: 'Malmö' },
          ]}
        /> */}
      </DigiLayoutContainer>
    </>
  );
};
