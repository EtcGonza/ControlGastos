import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MiBilleteraService } from './Services/mi-billetera.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private billeteraService: MiBilleteraService,
    private navCtrl: NavController
  ) {
    this.initializeApp();
    }

  async ngOnInit() {

    const billeteraVacia = await this.billeteraService.billeteraVacia();
    console.log('¿La billetera esta vacia?', billeteraVacia);

    if (billeteraVacia === false) {
      console.log('No fue necesario agregar saldo');
      this.navCtrl.navigateRoot('/home');
    } else {
      console.log('Fue necesario agregar saldo');
      this.navCtrl.navigateRoot('/agregar-saldo');
    }
  }

  initializeApp() {
   this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
