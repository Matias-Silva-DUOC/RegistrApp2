import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService, Regis } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  Regis : any = [];

  constructor(private dataService: DataService, private alertCtrl: AlertController, private modalCtrl: ModalController) {
    this.dataService.getReg().subscribe(res => {
      console.log(res);
      this.Regis = res;
      
    });
  }

  async openReg(reg:Regis){

  }

  
}
