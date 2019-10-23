import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-mi-billetera',
  templateUrl: './modal-mi-billetera.page.html',
  styleUrls: ['./modal-mi-billetera.page.scss'],
})
export class ModalMiBilleteraPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
