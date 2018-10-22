import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()

export class ArticuloService{
  /*articulos = [
      {ref:1, nomp:'Destornillador', precio:6000, descripcion:'SURTEK'},
      {ref:2, nomp:'Talagro', precio:580000, descripcion:'thakita'},
      {ref:3, nomp:'Pala', precio:29000, descripcion:'TRUPER'}
    ];*/
    articulos=[];

    constructor(public afDB:AngularFireDatabase){
    }

    public getArticulos(){
      return this.afDB.list('articulos/').valueChanges();
    //  return this.articulos;
    }

    public getArticulo(ref){
      //return this.articulos.filter(function(e, i){return e.ref == ref} ) [0] || { ref:null, nomp:null, precio:null, descrip:null };
      return this.afDB.object('articulos/'+ref).valueChanges();
    }

    public createArticulo(articulo){
     //this.articulos.push(articulo);
     this.afDB.database.ref('articulos/'+articulo.ref).set(articulo);
    }

    public editArticulo(articulo){
      /*for(let i=0; i < this.articulos.length; i++){
        if(this.articulos[i].ref==articulo.ref){
          this.articulos[i]=articulo;
        }
      }*/
      this.afDB.database.ref('articulos/'+articulo.ref).set(articulo);
    }

    public delArticulo(articulo){
      /*for(let i=0; i < this.articulos.length; i++){
        if(this.articulos[i].ref==articulo.ref){
          this.articulos.splice(i, 1);
        }
      }*/
      this.afDB.database.ref('articulos/'+articulo.ref).remove();
    }
}
