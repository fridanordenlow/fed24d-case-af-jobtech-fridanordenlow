import {
  FormInputSearchVariation,
  FormInputType,
  LayoutContainerVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiFormFilter,
  DigiFormInputSearch,
  DigiLayoutContainer,
} from '@digi/arbetsformedlingen-react';

export const Search = () => {
  return (
    <DigiLayoutContainer
      afVariation={LayoutContainerVariation.STATIC}
      afVerticalPadding
    >
      {/* <DigiTypography afVariation={TypographyVariation.SMALL}>
        <h2>Rubrik</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </DigiTypography> */}
      <DigiFormInputSearch
        afLabel="Sök på ett eller flera ord"
        afVariation={FormInputSearchVariation.MEDIUM}
        afType={FormInputType.SEARCH}
        afButtonText="Sök"
      ></DigiFormInputSearch>
      <DigiFormFilter
        afFilterButtonText="Filter 1"
        afSubmitButtonText="Filtrera"
        afName="Legend text"
        afListItems={[
          { id: 'omr1', label: 'Område 1' },
          { id: 'omr2', label: 'Område 2' },
          { id: 'omr3', label: 'Område 3' },
        ]}
      />
      <DigiFormFilter
        afFilterButtonText="Filter 2"
        afSubmitButtonText="Filtrera"
        afName="Legend text"
        afListItems={[
          { id: 'omr1', label: 'Område 1' },
          { id: 'omr2', label: 'Område 2' },
          { id: 'omr3', label: 'Område 3' },
        ]}
      />
    </DigiLayoutContainer>
  );
};
