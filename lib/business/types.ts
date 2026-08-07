export type BusinessUpdateInput = {
  businessId: string;

  name: string;
  slug: string;

  legalName?: string;
  description?: string;

  phone?: string;
  email?: string;
  website?: string;

  taxOffice?: string;
  taxNumber?: string;

  countryCode: string;
  city?: string;
  district?: string;
  addressLine?: string;
  postalCode?: string;

  timezone: string;
  currency: string;
  languageCode: string;
};