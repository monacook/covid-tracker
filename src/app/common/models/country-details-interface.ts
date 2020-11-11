export interface ICountriesDetailsRaw {
  Message: string;
  Global: IGlobalDetailsRaw;
  Countries: ICountryDetailsRaw[];
  Date: string;
}

export interface ICountryDetailsRaw {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
}

export interface IGlobalDetailsRaw {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
}

export interface IGlobalDetails {
  totalDeaths: number;
  totalRecovered: number;
  totalConfirmed: number;
}

export interface ICountryDetails {
  name: string;
  slug: string;
  totalDeaths: number;
  totalRecovered: number;
  totalConfirmed: number;
}

export interface ICountriesDetails {
  global: IGlobalDetails;
  countries: ICountryDetails[];
}
