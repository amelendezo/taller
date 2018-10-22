import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';


import {ArticuloService} from '../services/articulo.services';
import {DetailtPage} from '../pages/detailt/detailt';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AutenticacionServicio} from '../pages/autenticar.servicio/autenticar';



export const firebaseConfig = {
      apiKey: "AIzaSyCOAQV5RfRsnA7nbdrhLExggcv6qGN5lDg",
      authDomain: "articulo-d0138.firebaseapp.com",
      databaseURL: "https://articulo-d0138.firebaseio.com",
      storageBucket: "articulo-d0138.appspot.com",
      messagingSenderId: "971378066255"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailtPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailtPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ArticuloService,
    AutenticacionServicio
  ]
})
export class AppModule {}
