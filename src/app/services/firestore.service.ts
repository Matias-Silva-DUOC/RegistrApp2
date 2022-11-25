import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BasedatosService {

  constructor(public FireStore:AngularFirestore) { }

  createDocument<tipo>(data: tipo, enlace: string, id: string){
    const ref = this.FireStore.collection<tipo>(enlace);
    return ref.doc(id).set(data);
  }

  createId() {
    return this.FireStore.createId();

  }

  deletDocument<tipo>(enlace: string, id:string) {
    const ref = this.FireStore.collection<tipo>(enlace);
    return ref.doc(id).delete();

  }

  //(enlace: string): Observable<tipo[]>
  getCollectionChanges<tipo>(enlace: string){
    const ref = this.FireStore.collection<tipo>(enlace);
    return ref.valueChanges();
  }
}
