import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AutenticacionServicio} from '../autenticar.servicio/autenticar';
import {HomePage} from '../home/home';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private autenticacion:AutenticacionServicio) {
  }

  login(){
    this.autenticacion.login().then((data)=>{
      console.log(data);
      this.navCtrl.push(HomePage);
    })
    .catch((error)=>{
      console.log(error);
      alert('Hubo un error');
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


}
