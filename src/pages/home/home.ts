import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ArticuloService} from '../../services/articulo.services';
import {DetailtPage} from '../detailt/detailt';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  articulos=[];

  constructor(public navCtrl: NavController, public articuloService: ArticuloService ) {
    //this.articulos = articuloService.getArticulos();
    this.articuloService.getArticulos().subscribe(articulos=>{
    this.articulos=articulos;
  });
  }

  public goToDetail(ref){
    this.navCtrl.push(DetailtPage,{ref:ref});
  }

  public createArticulo(){
    this.navCtrl.push(DetailtPage, {ref:0});
  }

}
