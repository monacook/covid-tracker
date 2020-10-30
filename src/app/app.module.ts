import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CountryModule } from './features/country/country.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, AppRoutingModule, CountryModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
