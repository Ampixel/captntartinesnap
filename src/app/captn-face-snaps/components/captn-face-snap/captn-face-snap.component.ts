import {Component, OnInit, Input} from '@angular/core';
import {CaptnFaceSnapModel} from "../../../core/models/captn-face-snap-model";
import {CaptnFaceSnapsService} from "../../../core/services/captn-face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-captn-face-snap',
  templateUrl: './captn-face-snap.component.html',
  styleUrls: ['./captn-face-snap.component.scss']
})
export class CaptnFaceSnapComponent implements OnInit {
  @Input() captnFaceSnap!: CaptnFaceSnapModel;
  buttonText!: string;

  constructor( private capntFaceSnapsService : CaptnFaceSnapsService,
               private router: Router
  ) {}

  ngOnInit() {
    this.buttonText = 'Oh snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh snap!') {
      this.capntFaceSnapsService.snapCaptnFaceSnapById(this.captnFaceSnap.id, 'snap');
      this.buttonText = 'Oops, un snap!';
    } else {
      this.capntFaceSnapsService.snapCaptnFaceSnapById(this.captnFaceSnap.id, 'unsnap');
      this.buttonText = 'Oh snap!';
    }
  }

  onViewCaptnFaceSnap() {
    this.router.navigateByUrl(`captnfacesnaps/${this.captnFaceSnap.id}`);
  }
}
