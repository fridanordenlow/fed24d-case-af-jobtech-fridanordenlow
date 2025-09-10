import { ErrorPageStatusCodes } from '@digi/arbetsformedlingen';
import {
  DigiNotificationErrorPage,
  DigiLinkInternal,
} from '@digi/arbetsformedlingen-react';

export const Error = () => {
  return (
    <DigiNotificationErrorPage
      afHttpStatusCode={ErrorPageStatusCodes.FORBIDDEN}
    >
      <ul slot="links">
        <li>
          <DigiLinkInternal afHref="/" afVariation="small">
            Till föregående sida
          </DigiLinkInternal>
        </li>
        <li>
          <DigiLinkInternal afHref="/" afVariation="small">
            Till startsidan
          </DigiLinkInternal>
        </li>
      </ul>
    </DigiNotificationErrorPage>
  );
};
