import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any | null = null
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.user().subscribe(value => {
      this.user = value
    })
  }
  async login() {
    await this.authService.signInWithGoogle()
    await this.router.navigate(["tasks"])
  }
  async logout() {
    await this.authService.signOutWithGoogle()
    await this.router.navigate(["login"])
  }
}
