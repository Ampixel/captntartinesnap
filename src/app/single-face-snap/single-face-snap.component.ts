import {Component, OnInit} from '@angular/core';
import {CaptnFaceSnapModel} from "../models/captn-face-snap-model";
import {CaptnFaceSnapsService} from "../services/captn-face-snaps.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  captnFaceSnap!: CaptnFaceSnapModel;
  captnFaceSnap$!: Observable<CaptnFaceSnapModel>;
  buttonText!: string;

  constructor( private capntFaceSnapsService : CaptnFaceSnapsService,
               private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.buttonText = 'Oh snap!';
    const captnFaceSnapId = +this.route.snapshot.params['id'];
    this.captnFaceSnap$ = this.capntFaceSnapsService.getCaptnFaceSnapById(captnFaceSnapId);
  }

  onSnap() {
    // if (this.buttonText === 'Oh snap!') {
    //   this.capntFaceSnapsService.snapCaptnFaceSnapById(this.captnFaceSnap.id, 'snap');
    //   this.buttonText = 'Oops, un snap!';
    // } else {
    //   this.capntFaceSnapsService.snapCaptnFaceSnapById(this.captnFaceSnap.id, 'unsnap');
    //   this.buttonText = 'Oh snap!';
    // }
  }

}
