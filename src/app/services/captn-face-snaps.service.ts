import {Injectable} from "@angular/core";
import {CaptnFaceSnapModel} from "../models/captn-face-snap-model";

@Injectable({
  providedIn: 'root'
  }
)
export class CaptnFaceSnapsService {
  captnFaceSnaps: CaptnFaceSnapModel[] = [
    {
      id: 1,
      title: 'Haribo love',
      description: 'Haribo love by CaptNTartine',
      createdDate: new Date(),
      snaps: 100,
      imageUrl: 'https://images.unsplash.com/photo-1619620918960-756445ecb38d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
      location: 'Salle Pc'
    },{
      id: 2,
      title: 'Lego love in garden',
      description: 'Lego love by CaptNTartine',
      createdDate: new Date(),
      snaps: 250,
      imageUrl: 'https://images.unsplash.com/photo-1671542375455-428bd5cf308d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
      location: "Garden"
    },{
      id: 3,
      title: 'Lego love and Mount Potatoes',
      description: 'Lego love by CaptNTartine',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'https://images.unsplash.com/photo-1671542652104-acca38ea832e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    }
  ]

  getAllCaptnFaceSnaps(): CaptnFaceSnapModel[]{
    return this.captnFaceSnaps;
  }

  getCaptnFaceSnapById(captnFaceSnapId:number):CaptnFaceSnapModel{
    const captnFaceSnap = this.captnFaceSnaps.find(captnFaceSnap => captnFaceSnap.id === captnFaceSnapId);
    if(!captnFaceSnap){
      throw new Error('CaptnFaceSnap not found !');
    } else {
      return captnFaceSnap;
    }
  }

  snapCaptnFaceSnapById(captnFaceSnapId:number, snapType : 'snap' | 'unsnap'): void{
    const captnFaceSnap = this.getCaptnFaceSnapById(captnFaceSnapId);
    snapType === 'snap'? captnFaceSnap.snaps++ : captnFaceSnap.snaps--;
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
