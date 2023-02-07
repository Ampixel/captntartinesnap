import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CaptnFaceSnapComponent} from "./components/captn-face-snap/captn-face-snap.component";
import {CaptnFaceSnapListComponent} from "./components/captn-face-snap-list/captn-face-snap-list.component";
import {NewCaptnFaceSnapComponent} from "./components/new-captn-face-snap/new-captn-face-snap.component";
import {SingleFaceSnapComponent} from "./components/single-face-snap/single-face-snap.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CaptnFaceSnapsRoutingModule} from "./captn-face-snaps-routing.module";



@NgModule({
  declarations: [
    CaptnFaceSnapComponent,
    CaptnFaceSnapListComponent,
    NewCaptnFaceSnapComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CaptnFaceSnapsRoutingModule
  ],
  exports:[
    CaptnFaceSnapComponent,
    CaptnFaceSnapListComponent,
    NewCaptnFaceSnapComponent,
    SingleFaceSnapComponent
  ]
})
export class CaptnFaceSnapsModule { }
