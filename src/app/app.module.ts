import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { UiCompareComponent } from './ui/ui-compare/ui-compare.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UiConvertComponent } from './ui/ui-convert/ui-convert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinerComponent } from './ui/spiner/spiner.component';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    UiCompareComponent,
    NotFoundComponent,
    UiConvertComponent,
    SpinerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
