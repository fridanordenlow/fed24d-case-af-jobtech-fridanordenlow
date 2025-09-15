import {
  DigiHeader,
  DigiHeaderNavigation,
  DigiHeaderNavigationItem,
} from '@digi/arbetsformedlingen-react';
import { Link } from 'react-router';
import reactLogo from "../assets/images/logo.png"


export const Header = () => {
  return (
    <header>
<DigiHeader
  afSystemName="Tech Job Finder"
  afHideSystemName={false}
  afMenuButtonText="Meny"

>

        {/* Vår logga 
        <a slot="header-logo" aria-label="Sajtens startsida" href="/">
    <img 
    src={reactLogo} 
    alt="Tech Job Finder logga" 
    style={{ height: "40px", width: "auto" }} 
  />
</a>
*/}
  <a slot="header-logo" aria-label="Sajtens startsida" href="/">
    <img 
      src={reactLogo} 
      alt="Tech Job Finder logga" 
      style={{ height: "60px", width: "auto" }} 
    />
  </a>

        <div slot="header-content">
          {/* <DigiHeaderNotification afNotificationAmount={8}>
            <a href="/">
                <DigiIconBellFilled></DigiIconBellFilled>
                Notiser
            </a>
        </DigiHeaderNotification> */}
        </div>
        <div slot="header-navigation">
          <DigiHeaderNavigation
            afCloseButtonText="Stäng"
            afCloseButtonAriaLabel="Stäng meny"
            afNavAriaLabel="Huvudmeny"
          >




          <DigiHeaderNavigationItem>
              <a href="/">Hem</a>
          </DigiHeaderNavigationItem>
            <DigiHeaderNavigationItem afCurrentPage={true}>
              <a href="/ads">Sök jobb</a>
            </DigiHeaderNavigationItem>
            {/* <DigiHeaderNavigationItem>
                <a href="/">Grupper</a>
            </DigiHeaderNavigationItem>
            <DigiHeaderNavigationItem>
                <a href="/">Kontakt</a>
            </DigiHeaderNavigationItem> */}
          </DigiHeaderNavigation>
        </div>
        <Link to={'/ads'}>Sök jobb</Link>
      </DigiHeader>
    </header>
  );
};
