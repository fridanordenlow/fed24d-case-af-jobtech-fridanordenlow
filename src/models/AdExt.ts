export type AdExt = {
  id: number;
  headline: string;
  description: {
    text_formatted: string;
  };

  employer: {
    name: string;
  };

  workplace_address: {
    region: string;
    municipality: string;
  };

  publication_date: string;

  application_contacts?: {
    description?: string;
    email?: string;
    telephone?: string;
  };
  application_deadline: string;
};
