import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public menuController: MenuController) {}

  ngOnInit() {
    
  }
  openMenu(){
    this.menuController.toggle('menuR')
  }


}
