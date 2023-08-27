import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToFavComponent } from './add-to-fav/add-to-fav.component';
import { LiveExchangeRatesComponent } from './live-exchange-rates/live-exchange-rates.component';
import { PortfolioCardComponent } from './live-exchange-rates/portfolio-card/portfolio-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AddToFavComponent,
    LiveExchangeRatesComponent,
    PortfolioCardComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
