import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginDetailPage } from '../login-detail/login-detail';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }

  openLoginDetail(){
    this.navCtrl.push(LoginDetailPage, {}, {animate: true} );    
  }
}


