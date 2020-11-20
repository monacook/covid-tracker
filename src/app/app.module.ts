import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CountryModule } from './features/country/country.module';
import { WorldModule } from './features/world/world.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, AppRoutingModule, CountryModule, WorldModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
