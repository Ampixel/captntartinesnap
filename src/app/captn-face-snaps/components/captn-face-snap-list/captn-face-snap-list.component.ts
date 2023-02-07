import {Component, OnInit} from '@angular/core';
import {CaptnFaceSnapModel} from "../../../core/models/captn-face-snap-model";
import {CaptnFaceSnapsService} from "../../../core/services/captn-face-snaps.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-captn-face-snap-list',
  templateUrl: './captn-face-snap-list.component.html',
  styleUrls: ['./captn-face-snap-list.component.scss']
})
export class CaptnFaceSnapListComponent implements OnInit {

  captnFaceSnaps$!:Observable<CaptnFaceSnapModel[]>;

  constructor( private capntFaceSnapsService: CaptnFaceSnapsService ) { }

  ngOnInit(): void {
    this.captnFaceSnaps$ = this.capntFaceSnapsService.getAllCaptnFaceSnaps()
  }

}
