import { FooterVariation, FooterCardVariation } from '@digi/arbetsformedlingen';
import {
  DigiFooter,
  DigiFooterCard,
  DigiIconAccessibilityUniversal,
  DigiIconSign,
  DigiIconGlobe,
  DigiIconEnvelope,
} from '@digi/arbetsformedlingen-react';
// import { Link } from 'react-router';

export const Footer = () => {
  return (
    <footer>
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
          {/* <div>
            <DigiFooterCard afType={FooterCardVariation.BORDER}>
              <a href="#">Om tjänsten dolores</a>
              <p>
                Systemversion: 1.4.0 <br /> Ansvarig: Jenny Svensson
              </p>
            </DigiFooterCard>
          </div> */}
          {/* <div>
            <DigiFooterCard afType={FooterCardVariation.BORDER}>
              <a href="#">Kontakta servicdolores</a>
              <p>
                Telefon: 0771-60 0001 <br /> Öppettider: Vardagar 08:00-16:30
              </p>
            </DigiFooterCard>
          </div> */}
        </div>
        {/* <div slot="content-bottom-left">
          <Link to="/">
            <DigiLogo
              afVariation={LogoVariation.LARGE}
              afColor={LogoColor.SECONDARY}
            ></DigiLogo>
          </Link>
        </div> */}
        <div slot="content-bottom-right">
          <p>Följ oss på</p>
          <a href="#">Facebook</a>
          <a href="#">Youtube</a>
          <a href="#">Linkedin</a>
          <a href="#">Instagram</a>
        </div>
      </DigiFooter>
    </footer>
  );
};
