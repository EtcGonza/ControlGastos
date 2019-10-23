import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalIconGastosPage } from '../../Gastos_Pages/modal-icon-gastos/modal-icon-gastos.page';
import { ModalMiBilleteraPage } from '../modal-mi-billetera/modal-mi-billetera.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalMiBilleteraPage
    });
    await modal.present();
  }

}
