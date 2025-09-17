import { FooterVariation, FooterCardVariation } from '@digi/arbetsformedlingen';
import {
  DigiFooter,
  DigiFooterCard,
  DigiIconAccessibilityUniversal,
  DigiIconSign,
  DigiIconGlobe,
  DigiIconEnvelope,
} from '@digi/arbetsformedlingen-react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterWrapper>
      <DigiFooter afVariation={FooterVariation.SMALL}>
        <div slot="content-top">
          <DigiFooterCard afType={FooterCardVariation.ICON}>
            <ul>
              <li>
                <a href="#">
                  <DigiIconAccessibilityUniversal></DigiIconAccessibilityUniversal>
                  Tillgänglighetsredogörelse
                </a>
              </li>
              <li>
                <a href="#">
                  <DigiIconSign></DigiIconSign>
                  Teckenspråk
                </a>
              </li>
              <li>
                <a href="#">
                  <DigiIconGlobe></DigiIconGlobe>
                  Other languages
                </a>
              </li>
              <li>
                <a href="#">
                  <DigiIconEnvelope></DigiIconEnvelope>
                  Mejla oss
                </a>
              </li>
            </ul>
          </DigiFooterCard>
        </div>
        <div slot="content-bottom-right">
          <p>Följ oss på</p>
          <a href="#">Facebook</a>
          <a href="#">Youtube</a>
          <a href="#">Linkedin</a>
          <a href="#">Instagram</a>
        </div>
      </DigiFooter>
    </FooterWrapper>
  );
};

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  padding: 1rem 0.5rem;
  margin-top: 2rem;
  border-top: 3px dashed #ebda39;
`;
