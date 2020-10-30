import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CovidService } from 'src/app/common/services/covid.service';

@Component({
  selector: 'app-country-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataComponent {
  constructor(private readonly service: CovidService) {}
  private readonly country$ = new BehaviorSubject<string | undefined>(undefined);

  @Input()
  public set country(country: string) {
    this.country$.next(country);
  }

  public readonly name$ = this.country$.pipe(switchMap((slug) => this.service.getName(slug)));
  public readonly chart$ = this.country$.pipe(switchMap((slug) => this.service.getChart(slug)));
}
