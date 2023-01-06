import {Component, OnInit, Input} from '@angular/core';
import {CaptnFaceSnapModel} from "../models/captn-face-snap-model";

@Component({
  selector: 'app-captn-face-snap',
  templateUrl: './captn-face-snap.component.html',
  styleUrls: ['./captn-face-snap.component.scss']
})
export class CaptnFaceSnapComponent implements OnInit {
  @Input() captnFaceSnap!: CaptnFaceSnapModel;
  buttonText!: string;
  constructor() {
  }

  ngOnInit() {
    this.buttonText = 'Oh snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh snap!') {
      this.captnFaceSnap.snaps++;
      this.buttonText = 'Oops, un snap!';
    } else {
      this.captnFaceSnap.snaps--;
      this.buttonText = 'Oh snap!';
    }

  }
}
