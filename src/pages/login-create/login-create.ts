import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { LoginNewPasswordPage } from '../login-new-password/login-new-password';
@Component({
  selector: 'page-login-create',
  templateUrl: 'login-create.html',
})
export class LoginCreatePage {

  constructor(public navCtrl: NavController) {
  }

  openLoginNewPassword(){
    this.navCtrl.push(LoginNewPasswordPage, {}, {animate: true} );    
  }
}
