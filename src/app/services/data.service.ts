import { Injectable } from '@angular/core';
import { addDoc, doc, collection, docData, Firestore, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import {AngularFirestore} from '@angular/fire/compat/firestore';


export interface Regis {
  id: any;
  nombre: any;
  asiste: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore:Firestore,private angFirestore:AngularFirestore) { }

  getReg(): Observable<Regis[]>  {
    const regRef = collection(this.firestore, 'registros');
    return collectionData(regRef, { idField: 'id'}) as Observable<Regis[]>;
  }

  getRegById(id: any): Observable<Regis> {
    const regDocRef = doc(this.firestore, `registros/${id}`);
    return docData(regDocRef, {idField: 'id'}) as Observable<Regis>;
  }

  addReg(reg:Regis){
    const regRef = collection(this.firestore, 'registros');
    return addDoc(regRef, reg);
  }
  
  deleteReg(reg:Regis) {
    const regDocRef = doc(this.firestore, `registros/${reg.id}`);
    return deleteDoc(regDocRef);
  }

  updateReg(reg: Regis) {
    const regDocRef = doc(this.firestore, `registros/${reg.id}`);
    return updateDoc(regDocRef, {nombre: reg.nombre, asiste: reg.asiste});
  }

  //

  createDoc(data:any, path:string, id:string){
    const collection = this.angFirestore.collection(path);
    return collection.doc(id).set(data);
  }


}
