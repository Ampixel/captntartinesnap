import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from "@angular/common";
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { CaptnFaceSnapComponent } from './captn-face-snap/captn-face-snap.component';
import { CaptnFaceSnapListComponent } from './captn-face-snap-list/captn-face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewCaptnFaceSnapComponent } from './new-captn-face-snap/new-captn-face-snap.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CaptnFaceSnapComponent,
    CaptnFaceSnapListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleFaceSnapComponent,
    NewCaptnFaceSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
