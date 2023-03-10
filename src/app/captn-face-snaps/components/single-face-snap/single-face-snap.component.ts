import {Component, OnInit} from '@angular/core';
import {CaptnFaceSnapModel} from "../../../core/models/captn-face-snap-model";
import {CaptnFaceSnapsService} from "../../../core/services/captn-face-snaps.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  captnFaceSnap$!: Observable<CaptnFaceSnapModel>;
  buttonText!: string;

  constructor(private capntFaceSnapsService: CaptnFaceSnapsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.buttonText = 'Oh snap!';
    const captnFaceSnapId = +this.route.snapshot.params['id'];
    this.captnFaceSnap$ = this.capntFaceSnapsService.getCaptnFaceSnapById(captnFaceSnapId);
  }

  onSnap(captnFaceSnapId: number) {
    if (this.buttonText === 'Oh snap!') {
      this.captnFaceSnap$ = this.capntFaceSnapsService.snapCaptnFaceSnapById(captnFaceSnapId, 'snap').pipe(
        tap(() => this.buttonText = 'Oops, un snap!')
      );
    } else {
      this.captnFaceSnap$ = this.capntFaceSnapsService.snapCaptnFaceSnapById(captnFaceSnapId, 'unsnap').pipe(
        tap(() => this.buttonText = 'Oh snap!')
      )
    }
  }

}
