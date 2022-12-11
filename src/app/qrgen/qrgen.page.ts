import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Registro } from '../models/interfaces';
import { BasedatosService } from '../services/firestore.service';


@Component({
  selector: 'app-qrgen',
  templateUrl: './qrgen.page.html',
  styleUrls: ['./qrgen.page.scss'],
})
export class QrgenPage implements OnInit {

  //qrString = 'aaa';

  enable = true;
  // items : Observable<any[]>;
  

  // resultadoQR: number;
  // usuarios: Usuario[] = [];

  newReg: Registro = {
    nombre: '',
    asiste: '',
    html: '',
    id: '',

  };
  basedatosService: any;

  constructor( public database: BasedatosService, public toasController: ToastController, public loadingController: LoadingController) { }

  async save(){
    // this.presentLoading();
    console.log('Guardando ->', this.newReg);
    const data = this.newReg;
    data.id = this.database.createId();
    const enlace = 'Regitros';
    await this.database.createDocument<Registro>(data, enlace, data.id).catch(res => {
      console.log('el error es ->', res);
    });
    // this.presentToast('guardado con éxito', 2000)
    // this.loading.dismiss();
    
    this.newReg = {
      nombre: '',
      asiste: '',
      html: '',
      id: '',
    }

  }

  serviciosQR = [
  ];

  registros: Registro[] = [];

  ngOnInit() {
    console.log('this.usuarios -> ', this.registros);
    this.getRegistros();
  }

  getRegistros() {
    const enlace = 'Registros';
    this.database.getCollectionChanges<Registro>(enlace).subscribe(res => {
      console.log(res);
      this.registros = res;
    });
  }

  editReg(registro: Registro){
    console.log('click en el registro -> ', registro);
    this.basedatosService.setRegistro(registro);
  }

  /*
  async deleteRegistro(registro: Registro) {
    const enlace = 'qrgen';
    const res = await this.basedatosService.deletDocument<Registro>(enlace, item.id).catch(res =>{
      console.log('error -> ', res);
    })
    console.log('Borrado con éxito');
  }
  */
  




}
