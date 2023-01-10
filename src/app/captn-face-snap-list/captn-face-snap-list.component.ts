import { Component, OnInit } from '@angular/core';
import {CaptnFaceSnapModel} from "../models/captn-face-snap-model";
import {CaptnFaceSnapsService} from "../services/captn-face-snaps.service";

@Component({
  selector: 'app-captn-face-snap-list',
  templateUrl: './captn-face-snap-list.component.html',
  styleUrls: ['./captn-face-snap-list.component.scss']
})
export class CaptnFaceSnapListComponent implements OnInit {
  faceSnaps: CaptnFaceSnapModel[] = [];
  constructor( private capentFaceSnapsService: CaptnFaceSnapsService ) { }

  ngOnInit(): void {
    this.faceSnaps = this.capentFaceSnapsService.faceSnaps;
  }

}
