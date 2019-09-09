import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { ModalIconGastosPage } from '../../../Pages/General_Pages/modal-icon-gastos/modal-icon-gastos.page';

@Component({
  selector: 'app-crear-gasto',
  templateUrl: './crear-gasto.component.html',
  styleUrls: ['./crear-gasto.component.scss'],
})

export class CrearGastoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private modalCtrl: ModalController,
              private navCtrl: NavController) { }

  formularioGasto: FormGroup;
  submited = false;

  ngOnInit() {

    this.formularioGasto = this.formBuilder.group({
      descripcion: ['', Validators.required],
      monto: ['', Validators.required],
      tipo: ['', Validators.required]
    });

  }

  crearGasto() {

  }

  goBack() {
    this.navCtrl.navigateRoot(['/gastos']);
  }

  presentModal() {
    this.modalCtrl.create({
      component: ModalIconGastosPage
    }).then(modal => modal.present());
  }

}
