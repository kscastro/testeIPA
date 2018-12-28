import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginCreatePage } from '../login-create/login-create';

@Component({
  selector: 'page-login-detail',
  templateUrl: 'login-detail.html',
})
export class LoginDetailPage {

  constructor(public navCtrl: NavController) {
  }

  openLoginCreate(){
    this.navCtrl.push(LoginCreatePage, {}, {animate: true} );    
  }
}
