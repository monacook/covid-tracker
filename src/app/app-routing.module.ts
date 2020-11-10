import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryComponent } from './features/country';
import { WorldComponent } from './features/world/world.component';

const routes: Routes = [
  {
    path: '',
    component: WorldComponent,
  },
  {
    path: 'country/:country',
    component: CountryComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
