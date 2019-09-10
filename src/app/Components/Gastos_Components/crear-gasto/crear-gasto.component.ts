import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { ModalIconGastosPage } from '../../../Pages/General_Pages/modal-icon-gastos/modal-icon-gastos.page';
import { GastosService } from '../../../Services/gastos.service';

@Component({
  selector: 'app-crear-gasto',
  templateUrl: './crear-gasto.component.html',
  styleUrls: ['./crear-gasto.component.scss'],
})

export class CrearGastoComponent implements OnInit {

  formularioGasto: FormGroup;
  objectoIcono: any;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private modalCtrl: ModalController,
              private navCtrl: NavController,
              private gastosService: GastosService) {}

  ngOnInit() {
    this.formularioGasto = this.formBuilder.group({
      descripcion: ['', Validators.required],
      monto: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  get f() {
    return this.formularioGasto.controls;
  }

  crearGasto() {
    this.submitted = true;

    this.gastosService.crearGasto(
      this.formularioGasto.value.descripcion,
      this.formularioGasto.value.monto,
      this.objectoIcono.iconoPath.categoria,
      this.formularioGasto.value.tipo,
      this.objectoIcono.iconoPath.path
    );

    if (this.formularioGasto.invalid) {
      return;
    }
  }

  goBack() {
    this.navCtrl.navigateRoot(['/gastos']);
  }

  async abrirModal() {
    const modal = await this.modalCtrl.create({
       component: ModalIconGastosPage
     });

    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data.iconoPath);
    this.objectoIcono = data;
   }

}
