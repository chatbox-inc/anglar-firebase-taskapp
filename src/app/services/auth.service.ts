import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private readonly afAuth: AngularFireAuth
  ) { }
  async signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    await this.afAuth.signInWithPopup(provider)
  }
  async signOutWithGoogle() {
   await this.afAuth.signOut()
  }
  user() {
    return this.afAuth.user
  }
}
