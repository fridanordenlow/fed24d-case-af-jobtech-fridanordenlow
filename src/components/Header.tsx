import {
  DigiHeader,
  DigiHeaderNavigation,
} from '@digi/arbetsformedlingen-react';

export const Header = () => {
  return (
    <header>
      <DigiHeader
        afSystemName="Tech Job Finder"
        afHideSystemName={false}
        afMenuButtonText="Meny"
      >
        {/* Loggan behöver bytas ut på något sätt */}
        <a slot="header-logo" aria-label="Sajtens startsida" href="/"></a>
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
            {/* <DigiHeaderNavigationItem afCurrentPage={true}>
                <a href="/">Mina bokningar</a>
            </DigiHeaderNavigationItem>
            <DigiHeaderNavigationItem>
                <a href="/">Grupper</a>
            </DigiHeaderNavigationItem>
            <DigiHeaderNavigationItem>
                <a href="/">Kontakt</a>
            </DigiHeaderNavigationItem> */}
          </DigiHeaderNavigation>
        </div>
      </DigiHeader>
    </header>
  );
};
