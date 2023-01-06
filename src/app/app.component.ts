import {Component, OnInit} from '@angular/core';
import {CaptnFaceSnapModel} from "./models/captn-face-snap-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps: CaptnFaceSnapModel[] = [];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Haribo love',
        description: 'Haribo love by CaptNTartine',
        createDate: new Date(),
        snaps: 100,
        imageUrl: 'https://images.unsplash.com/photo-1619620918960-756445ecb38d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
        location: 'Salle Pc'
      },{
        title: 'Lego love in garden',
        description: 'Lego love by CaptNTartine',
        createDate: new Date(),
        snaps: 250,
        imageUrl: 'https://images.unsplash.com/photo-1671542375455-428bd5cf308d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
        location: "Garden"
      },{
        title: 'Lego love and Mount Potatoes',
        description: 'Lego love by CaptNTartine',
        createDate: new Date(),
        snaps: 0,
        imageUrl: 'https://images.unsplash.com/photo-1671542652104-acca38ea832e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      }
    ]
  }

}
