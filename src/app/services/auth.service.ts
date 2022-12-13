import { Injectable } from '@angular/core';
import { signOut } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { UserI } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authFirebase: AngularFireAuth) { }

  loginEP(mail: string, pass: string){
    return this.authFirebase.signInWithEmailAndPassword(mail, pass)
  }

  logout(){
    this.authFirebase.signOut();
  }

  registrarse(datos : UserI){
    return this.authFirebase.createUserWithEmailAndPassword(datos.email, datos.password)
  }

}
