import {Component, OnDestroy, OnInit} from '@angular/core';
import {CaptnFaceSnapModel} from "../models/captn-face-snap-model";
import {CaptnFaceSnapsService} from "../services/captn-face-snaps.service";
import {interval, Subject} from "rxjs";
import {takeUntil, tap} from "rxjs/operators";

@Component({
  selector: 'app-captn-face-snap-list',
  templateUrl: './captn-face-snap-list.component.html',
  styleUrls: ['./captn-face-snap-list.component.scss']
})
export class CaptnFaceSnapListComponent implements OnInit, OnDestroy {
  captnFaceSnaps: CaptnFaceSnapModel[] = [];
  private destroy$!: Subject<boolean>
  constructor( private capntFaceSnapsService: CaptnFaceSnapsService ) { }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.captnFaceSnaps = this.capntFaceSnapsService.getAllCaptnFaceSnaps();

    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

}
