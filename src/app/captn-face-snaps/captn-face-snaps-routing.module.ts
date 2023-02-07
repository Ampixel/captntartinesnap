import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SingleFaceSnapComponent} from "./components/single-face-snap/single-face-snap.component";
import {CaptnFaceSnapListComponent} from "./components/captn-face-snap-list/captn-face-snap-list.component";
import {NewCaptnFaceSnapComponent} from "./components/new-captn-face-snap/new-captn-face-snap.component";
import {AuthGuard} from "../core/guards/auth.guard";

const routes: Routes = [
  { path: 'create', component: NewCaptnFaceSnapComponent, canActivate: [AuthGuard] },
  { path: ':id', component:SingleFaceSnapComponent, canActivate: [AuthGuard] },
  { path: '', component: CaptnFaceSnapListComponent, canActivate: [AuthGuard] },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
  })

export class CaptnFaceSnapsRoutingModule {

}
