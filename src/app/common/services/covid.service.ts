import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map, filter, concatMap } from 'rxjs/operators';

import { ICountryRaw } from '../models/country.interface';
import { ChartNodeRaw, ChartSeries } from '../models/chart.interface';
import { ICountriesDetails, ICountriesDetailsRaw } from '../models/country-details-interface';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  constructor(private readonly http: HttpClient) {}

  public readonly countries$ = this.http.get<ICountryRaw[]>('https://api.covid19api.com/countries').pipe(
    map((countries) => countries.map(({ Country, ISO2, Slug }) => ({ name: Country, iso: ISO2, slug: Slug }))),
    shareReplay(1)
  );

  public getName(slug: string): Observable<string> {
    return this.countries$.pipe(
      concatMap((countries) => countries),
      filter((country) => slug === country.slug),
      map(({ name }) => name)
    );
  }

  public getChart(slug: string): Observable<ChartSeries[]> {
    return this.http.get<ChartNodeRaw[]>(`https://api.covid19api.com/total/country/${slug}`).pipe(
      map((chartNodes) => [
        {
          name: 'Confirmed',
          series: chartNodes.map((node) => ({ name: node.Date, value: node.Confirmed })),
        },
        {
          name: 'Active',
          series: chartNodes.map((node) => ({ name: node.Date, value: node.Active })),
        },
        {
          name: 'Recovered',
          series: chartNodes.map((node) => ({ name: node.Date, value: node.Recovered })),
        },
        {
          name: 'Deaths',
          series: chartNodes.map((node) => ({ name: node.Date, value: node.Deaths })),
        },
      ])
    );
  }

  public getSummary(): Observable<ICountriesDetails> {
    return this.http.get<ICountriesDetailsRaw>('https://api.covid19api.com/summary').pipe(
      map((countryDetails) => ({
        global: {
          totalDeaths: countryDetails.Global.TotalDeaths,
          totalRecovered: countryDetails.Global.TotalRecovered,
          totalConfirmed: countryDetails.Global.TotalConfirmed,
        },

        countries: countryDetails.Countries.map((country) => ({
          name: country.Country,
          slug: country.Slug,
          totalDeaths: country.TotalDeaths,
          totalRecovered: country.TotalRecovered,
          totalConfirmed: country.TotalConfirmed,
        })),
      }))
    );
  }
}
