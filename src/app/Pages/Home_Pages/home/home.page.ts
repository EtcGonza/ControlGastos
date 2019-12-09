import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalIconGastosPage } from '../../Gastos_Pages/modal-icon-gastos/modal-icon-gastos.page';
import { ModalMiBilleteraPage } from '../modal-mi-billetera/modal-mi-billetera.page';
import { MiBilleteraService } from '../../../Services/mi-billetera.service';
import { GastosService } from '../../../Services/gastos.service';
import { DeudaService } from '../../../Services/deuda.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private modalController: ModalController, private billetera: DeudaService) {}

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalMiBilleteraPage
    });
    await modal.present();
  }

  mostrarJson() {
    const json = this.billetera.getJson();
    console.log(json);
  }

}
