import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MiBilleteraService } from '../../../Services/mi-billetera.service';

@Component({
  selector: 'app-agregar-saldo',
  templateUrl: './agregar-saldo.page.html',
  styleUrls: ['./agregar-saldo.page.scss'],
})
export class AgregarSaldoPage implements OnInit {

  constructor(private alertController: AlertController,
              private billeteraService: MiBilleteraService) {}

  ngOnInit() {
    this.presentarAlert();
  }

  async presentarAlert() {
    const alert = await this.alertController.create({
      header: '¿Con cuanto dinero cuentas?',
      subHeader: 'Puedes modificarlo en el futuro',
      backdropDismiss: false,
      inputs: [
        {
          name: 'dinero',
          type: 'number',
          placeholder: '15000'
        }
      ],
      buttons: [
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
