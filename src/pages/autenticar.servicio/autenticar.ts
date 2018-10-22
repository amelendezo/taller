import {Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Injectable()

export class AutenticacionServicio{
  constructor(public autent: AngularFireAuth){

  }
  login(){
      return this.autent.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
