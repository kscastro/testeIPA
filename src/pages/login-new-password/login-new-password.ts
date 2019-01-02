import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard'


@Component({
  selector: 'page-login-new-password',
  templateUrl: 'login-new-password.html',
})
export class LoginNewPasswordPage {

  constructor(public navCtrl: NavController) {
  }

  openDashboardPage(){
    this.navCtrl.push(DashboardPage, {}, {animate: true} );    
  }

}
