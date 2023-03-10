import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {CaptnFaceSnapModel} from "../../../core/models/captn-face-snap-model";
import {map, tap} from "rxjs/operators";
import {CaptnFaceSnapsService} from "../../../core/services/captn-face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-captn-face-snap',
  templateUrl: './new-captn-face-snap.component.html',
  styleUrls: ['./new-captn-face-snap.component.scss']
})
export class NewCaptnFaceSnapComponent implements OnInit {

  snapForm!: UntypedFormGroup;
  captnFaceSnapPreview$!: Observable<CaptnFaceSnapModel>;
  urlRegex!: RegExp;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private captnFaceSnapService: CaptnFaceSnapsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
    }, {
      updateOn: "blur"
    });
    this.captnFaceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createDate: new Date(),
        id: 0,
        snaps: 0
      }))
    );
  }

  onSubmitForm(): void {
    this.captnFaceSnapService.addCaptnFaceSnap(this.snapForm.value).pipe(
      tap(()=>this.router.navigateByUrl('/captnfacesnaps'))
    ).subscribe();
  }

}
