import { ErrorPageStatusCodes } from '@digi/arbetsformedlingen';
import {
  DigiNotificationErrorPage,
  DigiLinkInternal,
} from '@digi/arbetsformedlingen-react';

export const Error = () => {
  return (
    <DigiNotificationErrorPage
      afHttpStatusCode={ErrorPageStatusCodes.NOT_FOUND}
    >
      <ul slot="links">
        <li>
          <DigiLinkInternal afHref="/">
            <span style={{ color: '#ebda39' }}>Till startsidan</span>
          </DigiLinkInternal>
        </li>
      </ul>
    </DigiNotificationErrorPage>
  );
};
