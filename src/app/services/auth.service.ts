import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any | null = null
  isLogin: boolean = false

  constructor(
    private readonly afAuth: AngularFireAuth,
    private router: Router
  ) { }
  async signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    await this.afAuth.signInWithPopup(provider)
    await this.router.navigate(["tasks"])
  }
  async signOutWithGoogle() {
    await this.afAuth.signOut()
    await this.router.navigate([""])
  }
  checkIsLogin(): Observable<any> {
    return this.afAuth.authState.pipe(map(user => {
      this.isLogin = !!user
      return this.isLogin
    }))
  }
}
