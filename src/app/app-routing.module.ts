import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CaptnFaceSnapListComponent} from "./captn-face-snap-list/captn-face-snap-list.component";

const routes: Routes = [
  { path: 'captnfacesnaps', component: CaptnFaceSnapListComponent}
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
