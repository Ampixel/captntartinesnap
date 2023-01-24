import {Injectable} from "@angular/core";
import {CaptnFaceSnapModel} from "../models/captn-face-snap-model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
  }
)
export class CaptnFaceSnapsService {
  captnFaceSnaps: CaptnFaceSnapModel[] = []

  constructor(private http: HttpClient) {
  }

  getAllCaptnFaceSnaps(): Observable<CaptnFaceSnapModel[]>{
    return this.http.get<CaptnFaceSnapModel[]>('http://localhost:3000/facesnaps');
  }

  getCaptnFaceSnapById(captnFaceSnapId:number): Observable<CaptnFaceSnapModel>{
    return this.http.get<CaptnFaceSnapModel>(`http://localhost:3000/facesnaps/${captnFaceSnapId}`);
  }

  snapCaptnFaceSnapById(captnFaceSnapId:number, snapType : 'snap' | 'unsnap'): void{
    // const captnFaceSnap = this.getCaptnFaceSnapById(captnFaceSnapId);
    // snapType === 'snap'? captnFaceSnap.snaps++ : captnFaceSnap.snaps--;
  }

  addCaptnFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): void{
    const captnFaceSnap: CaptnFaceSnapModel = {
      ...formValue,
        createdDate: new Date(),
        snaps: 0,
      id: this.captnFaceSnaps[this.captnFaceSnaps.length - 1].id + 1
    }
    this.captnFaceSnaps.push(captnFaceSnap);
  }
}
