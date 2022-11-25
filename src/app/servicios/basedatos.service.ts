import { Injectable } from "@angular/core";

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
    providedIn: 'root'
})
export class BasedatosService {

    constructor(public firestore: AngularFirestore){}


    // CRUD

    crearDoc<tipo>(data: tipo, enlace: string){
        const ref : AngularFirestoreCollection<tipo> = this.firestore.collection<tipo>(enlace);
        return ref.add(data);

    }
    
    deletDoc(){

    }
    getDoc(){

    }
    editDoc(){

    }
}