import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService, Regis } from '../services/data.service';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-qrgen',
  templateUrl: './qrgen.page.html',
  styleUrls: ['./qrgen.page.scss'],
})
export class QrgenPage implements OnInit {

  constructor(
    private dataService: DataService, 
    private barcodeScanner: BarcodeScanner, 
    private alertCtrl: AlertController, 
    private modalCtrl: ModalController, 
    private router:Router,
    private authService: AuthService
    ){
    this.dataService.getReg().subscribe(res => {
      this.Regis = res;
    });

  }

  ngOnInit() {
  }

  //

  code: any;
  Regis : any = [];
  
  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      console.log('Barcode data: ', barcodeData, this.code);
      
    }).catch(err => {
      console.log('ERROR: ', err)
    });
  }

  logout(){
    this.authService.logout();
    console.log('Cerrando Sesión');
    this.router.navigate(['/login']);
  }


  async addReg(){
    const alert = await this.alertCtrl.create({
      header: 'Añadir Registro',
      inputs: [
        {
          name: 'nombre',
          placeholder: 'nombre estudiante',
          type: 'textarea'
        },
        {
          name: 'asiste',
          placeholder: 'asignatura',
          type: 'textarea'
        }
      ],
      buttons:[
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Añadir',
          handler: (res)=> {
            this.dataService.addReg({nombre: res.nombre, asiste: res.asiste, id: res.id});
          },
        }
      ]
    });
    await alert.present();
  }


}
