import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MiBilleteraService } from './Services/mi-billetera.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private billeteraService: MiBilleteraService,
    private navCtrl: NavController
  ) {
    this.initializeApp();
    console.log('¿La billetera esta vacia?', this.billeteraService.billeteraVacia());
    if (this.billeteraService.billeteraVacia() === true) {
      this.navCtrl.navigateRoot('/agregar-saldo');
    } else {
      console.log('No fue necesario agregar saldo');
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
