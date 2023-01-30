import {Injectable} from "@angular/core";
import {CaptnFaceSnapModel} from "../models/captn-face-snap-model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, switchMap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  }
)
export class CaptnFaceSnapsService {
  captnFaceSnaps: CaptnFaceSnapModel[] = []

  constructor(private http: HttpClient) {
  }

  getAllCaptnFaceSnaps(): Observable<CaptnFaceSnapModel[]> {
    return this.http.get<CaptnFaceSnapModel[]>('http://localhost:3000/facesnaps');
  }

  getCaptnFaceSnapById(captnFaceSnapId: number): Observable<CaptnFaceSnapModel> {
    return this.http.get<CaptnFaceSnapModel>(`http://localhost:3000/facesnaps/${captnFaceSnapId}`);
  }

  snapCaptnFaceSnapById(captnFaceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<CaptnFaceSnapModel> {
    return this.getCaptnFaceSnapById(captnFaceSnapId).pipe(
      map(captnFaceSnap => ({
        ...captnFaceSnap,
        snaps: captnFaceSnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(updateCaptnFaceSnap => this.http.put<CaptnFaceSnapModel>(
        `http://localhost:3000/facesnaps/${captnFaceSnapId}`,
        updateCaptnFaceSnap)
      )
    );
  }

  addCaptnFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<CaptnFaceSnapModel> {
    return this.getAllCaptnFaceSnaps().pipe(
      // On retourne un tableau trié par ID pour s'assurer que le dernier élément du tableau possède l'ID le plus élevé.
      map(captnFaceSnaps => [...captnFaceSnaps].sort((a,b) => a.id - b.id)),
      // On retourne ensuite le dernier élément de ce tableau.
      map(sortedCaptnFaceSnaps => sortedCaptnFaceSnaps[sortedCaptnFaceSnaps.length - 1]),
      // On retourne le nouveau FaceSnap avec son ID valable.
      map(previousFaceSnap => ({
        ...formValue,
        snaps:0,
        createdDate : new Date(),
        id: previousFaceSnap.id + 1
      })),
      // Le dernier opérateur,  switchMap()  , génère la requête POST finale
      switchMap(newCaptnFaceSnap => this.http.post<CaptnFaceSnapModel>('http://localhost:3000/facesnaps', newCaptnFaceSnap))
    );
  }

}
