import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ArticuloService} from '../../services/articulo.services';
/**
 * Generated class for the DetailtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailt',
  templateUrl: 'detailt.html',
})
export class DetailtPage {
  articulo:any = {ref:null, nomp:null, precio:null, descrip:null};
  ref=null;
  show=true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public articuloService:ArticuloService) {
    this.ref=navParams.get('ref');

    if(this.ref !=0){
      //  this.articulo=articuloService.getArticulo(this.ref);
      this.articuloService.getArticulo(this.ref).subscribe(articulo=>{
      this.articulo=articulo;
    });
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailtPage');
  }

  addArticulo(){
    if(this.ref !=0){
        this.articuloService.editArticulo(this.articulo);
        alert('Articulo editado con exito');
    }else{
      this.articuloService.createArticulo(this.articulo);
      alert('El nuevo articulo se registro con exito');
    }
    this.navCtrl.pop();
  }
   delArticulo(){
     this.show=false;
     this.articuloService.delArticulo(this.articulo);
     alert('El articulo fue Eliminado');
     this.navCtrl.pop();
   }

}
