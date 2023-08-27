import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiComponent } from './ui/ui.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UiConvertComponent } from './ui/ui-convert/ui-convert.component';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AddToFavComponent } from './add-to-fav/add-to-fav.component';
import { LiveExchangeRatesComponent } from './live-exchange-rates/live-exchange-rates.component';
import { PortfolioCardComponent } from './live-exchange-rates/portfolio-card/portfolio-card.component';
import {UiCompareComponent} from "./ui/ui-compare/ui-compare.component";



@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    UiCompareComponent,
    NotFoundComponent,
    UiConvertComponent,
    AddToFavComponent,
    LiveExchangeRatesComponent,
    PortfolioCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    HttpClientModule,

    NgxSpinnerModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
