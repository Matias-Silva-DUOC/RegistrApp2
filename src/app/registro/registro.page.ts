import { Component, OnInit } from '@angular/core';
import { UserI } from '../models/models';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  datos : UserI = {
    nombre: '',
    email: '',
    uid: '',
    password: '',
    perfil: 'alumno'
  }

  constructor(private auth:AuthService, private firestore:DataService) { }

  ngOnInit() {
  }

  /*async registrar(){
    console.log('datos: ', this.datos);
    const res = await this.auth.registrarse(this.datos).catch(error =>{
      console.log('error', error);
    })
    if (res){
      console.log('Usuario Creado');
      const path = 'Usuario';
      const id = res.user?.uid;
      this.datos.uid = id;
      this.datos.password = null;
      this.firestore.createDoc(this.datos, path, id)
    }
  }
  */

}
