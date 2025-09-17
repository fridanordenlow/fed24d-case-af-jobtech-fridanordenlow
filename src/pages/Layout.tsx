import { DigiLayoutBlock } from '@digi/arbetsformedlingen-react';
import { LayoutBlockVariation } from '@digi/arbetsformedlingen';
import { Header } from '../components/Header';
import { Outlet } from 'react-router';
import { Footer } from '../components/Footer';

export const Layout = () => {
  return (
    <>
      <DigiLayoutBlock afVariation={LayoutBlockVariation.TERTIARY}>
        <DigiLayoutBlock afVariation={LayoutBlockVariation.SECONDARY}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        </DigiLayoutBlock>
      </DigiLayoutBlock>
    </>
  );
};
