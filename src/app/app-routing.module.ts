import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CaptnFaceSnapListComponent} from "./captn-face-snap-list/captn-face-snap-list.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {SingleFaceSnapComponent} from "./single-face-snap/single-face-snap.component";
import {NewCaptnFaceSnapComponent} from "./new-captn-face-snap/new-captn-face-snap.component";

const routes: Routes = [
  {path:'captnfacesnaps/:id', component:SingleFaceSnapComponent},
  { path: 'captnfacesnaps', component: CaptnFaceSnapListComponent},
  {path:'create', component: NewCaptnFaceSnapComponent},
  { path: '', component: LandingPageComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
