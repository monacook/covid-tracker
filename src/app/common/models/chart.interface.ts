export interface ChartNodeRaw {
  Country: string;
  CountryCode: string;
  Province: string;
  City: string;
  CityCode: string;
  Lat: string;
  Lon: string;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
  Date: string;
}

export interface SeriesNode {
  name: string;
  value: number;
}

export interface ChartSeries {
  name: string;
  series: SeriesNode[]
}