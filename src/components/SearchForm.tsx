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
import { getAds } from '../services/adService';
import { useAdContext } from '../contexts/useAdContext';

export const SearchForm = () => {
  const { setAds, searchQuery, setSearchQuery, setLoading, setError } =
    useAdContext(); // Custom hook for context
  const [userInput, setUserInput] = useState(searchQuery);

  const handleSearch = async (e: CustomEvent<string>) => {
    const searchValue = e.detail;
    setLoading(true);
    setSearchQuery(searchValue);
    setError(null);

    try {
      const results = await getAds(searchValue);
      setAds(results);
    } catch (err) {
      console.error(err);
      setError('Något gick fel, försök igen.');
    } finally {
      // setUserInput(''); // Should search input be cleared or not after search?
      setLoading(false);
    }
  };

  const handleInput = (e: CustomEvent) => {
    const value = (e.detail.target as HTMLInputElement).value || '';
    if (value.length > 50) return; // Ignore too long input
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
          //   onAfOnInput={(e: CustomEvent) => {
          //     const inputValue =
          //       (e.detail.target as HTMLInputElement).value || ''; // e.detail = payload from Af component
          //     setUserInput(inputValue);
          //   }}
        ></DigiFormInputSearch>
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
