import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryComponent } from './features/country';

const routes: Routes = [
  {
    path: 'country/:country',
    component: CountryComponent,
  },
  {
    path: '**',
    redirectTo: 'country/united-states',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
