import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// import { LoginPage } from '../pages/login/login';
// import { LoginDetailPage } from '../pages/login-detail/login-detail';
// import { LoginCreatePage } from '../pages/login-create/login-create';
// import { LoginNewPasswordPage } from '../pages/login-new-password/login-new-password';
import { DashboardPage } from '../pages/dashboard/dashboard'


@NgModule({
  declarations: [
    MyApp,
    // LoginPage,
    // LoginDetailPage,
    // LoginCreatePage,
    // LoginNewPasswordPage,
    DashboardPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // LoginPage,
    // LoginDetailPage,
    // LoginCreatePage,
    // LoginNewPasswordPage,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
