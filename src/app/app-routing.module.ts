import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LandingPageComponent} from "./landing-page/components/landing-page/landing-page.component";

const routes: Routes = [
  { path: 'captnfacesnaps', loadChildren: ()=> import('./captn-face-snaps/captn-face-snaps.module').then(m => m.CaptnFaceSnapsModule) },
  { path: '', component: LandingPageComponent }
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
