import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { map } from 'rxjs/operators';

@Component({
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent {
  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {}
  public readonly country$ = this.route.params.pipe(map(({ country }) => country as string));

  public switchCountry(country: string): void {
    this.router.navigate([`../${country}`], { relativeTo: this.route });
  }
}
