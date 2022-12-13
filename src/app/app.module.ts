import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from 'src/environments/environment';
import { provideFirebaseApp, initializeApp} from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { HttpClientModule } from '@angular/common/http';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireAuthModule, HttpClientModule,
            provideFirebaseApp(() =>initializeApp(environment.firebaseConfig)),
            provideFirestore(()=> getFirestore()),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},{provide:FIREBASE_OPTIONS, useValue: environment.firebaseConfig}, BarcodeScanner],
  bootstrap: [AppComponent],
})
export class AppModule {}



