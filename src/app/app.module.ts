import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CaptnFaceSnapComponent } from './captn-face-snap/captn-face-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptnFaceSnapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
