import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
  
import { AuthPage } from '../auth/auth';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  username: string;
  age: string;
  email: string;

  constructor(public nav: NavController) {
      this.nav = nav;
      this.username = window.localStorage.getItem('username');
      this.age = window.localStorage.getItem('age');
      this.email = window.localStorage.getItem('email');
  }

  logout() {
      window.localStorage.removeItem('username');
      window.localStorage.removeItem('password');
      window.localStorage.removeItem('age');
      window.localStorage.removeItem('email');
      

      this.nav.setRoot(AuthPage);
      this.nav.popToRoot();         
  }    
}