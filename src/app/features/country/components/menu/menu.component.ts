import { Component, ChangeDetectionStrategy, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CovidService } from 'src/app/common/services/covid.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit, OnDestroy {
  constructor(private readonly service: CovidService) {}

  public readonly countries$ = this.service.countries$;
  public readonly control = new FormControl();
  public readonly subscription = new Subscription();

  @Input()
  public set selected(country: string) {
    this.control.setValue(country);
  }

  @Output()
  public changed = new EventEmitter();

  public ngOnInit(): void {
    this.subscription.add(this.control.valueChanges.subscribe((country) => this.changed.emit(country)));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
