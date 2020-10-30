import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

import { SharedModule } from '../../shared/shared.module';

import { CountryComponent } from './country.component';
import { MenuComponent } from './components/menu/menu.component';
import { DataComponent } from './components/data/data.component';

@NgModule({
  imports: [SharedModule, MatSelectModule],
  declarations: [CountryComponent, MenuComponent, DataComponent],
  exports: [MenuComponent],
})
export class CountryModule {}
