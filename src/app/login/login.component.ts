import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import firebase from "firebase/compat";
import User = firebase.User;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User | null = null
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.user().subscribe(value => {
      this.user = value
    })
  }
  async login() {
    await this.authService.signInWithGoogle()
  }
  async logout() {
    await this.authService.signOutWithGoogle()
  }
}
