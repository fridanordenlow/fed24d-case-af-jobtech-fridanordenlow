// import {
//   ButtonType,
//   FormInputSearchVariation,
//   FormInputType,
//   LayoutContainerVariation,
// } from '@digi/arbetsformedlingen';
// import {
//   DigiFormInputSearch,
//   DigiLayoutContainer,
// } from '@digi/arbetsformedlingen-react';
// import { useState } from 'react';
// import { useLoaderData } from 'react-router';
// import { getAds } from '../services/adService';
// import type { AdsLoader } from '../loaders/adsLoader';

// export const SearchOld = () => {
//   const { ads: initialAds } = useLoaderData<AdsLoader>();
//   const [ads, setAds] = useState(initialAds);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async (event: CustomEvent<string>) => {
//     const query = event.detail;
//     if (!query) return;
//     setLoading(true);

//     try {
//       const results = await getAds(query);
//       setAds(results);
//     } catch (err) {
//       console.error(err);
//       setAds([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <DigiLayoutContainer
//         afVariation={LayoutContainerVariation.STATIC}
//         afVerticalPadding
//       >
//         <DigiFormInputSearch
//           afLabel="Sök på ett eller flera ord"
//           afVariation={FormInputSearchVariation.MEDIUM}
//           afType={FormInputType.SEARCH}
//           afButtonText="Sök"
//           afButtonType={ButtonType.SUBMIT}
//           onAfOnSubmitSearch={handleSearch}
//         ></DigiFormInputSearch>
//       </DigiLayoutContainer>
//       <DigiLayoutContainer
//         afVariation={LayoutContainerVariation.STATIC}
//         afVerticalPadding
//       >
//         {/* Med vanlig HTML fungerar det att söka och rendera om HTML:en */}
//         <ul>
//           {ads.map((ad) => (
//             <li key={ad.id}>
//               {ad.headline} – {ad.employer?.name}
//             </li>
//           ))}
//         </ul>
//         {/* <AdsPresentation ads={ads} loading={loading} /> */}
//         {loading && <p>Laddar...</p>}
//       </DigiLayoutContainer>
//     </>
//   );
// };
