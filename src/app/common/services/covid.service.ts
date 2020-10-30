import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, map, filter, concatMap } from 'rxjs/operators';
import { ICountryRaw, ICountry } from '../models/country.interface';
import { Observable } from 'rxjs';
import { ChartNode } from '../models/chart.interface';

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

  public getChart(slug: string): Observable<ChartNode[]> {
    console.log(slug);
    return this.http.get<ChartNode[]>(`https://api.covid19api.com/total/country/${slug}`);
  }
}
