import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Input()
  isLogin!: boolean;
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    console.log(this.isLogin)
  }
  async login() {
    await this.authService.signInWithGoogle()
  }
  async logout() {
    await this.authService.signOutWithGoogle()
  }
}
