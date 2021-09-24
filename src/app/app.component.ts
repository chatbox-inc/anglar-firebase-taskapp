import { Component, OnInit } from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogin: any | null = null
  title = 'ng-mobile';
  constructor(private authService: AuthService) {}
  ngOnInit() {
    console.log("check")
    this.authService.checkIsLogin().subscribe(auth => {
      this.isLogin = !!auth
    })
  }
}
