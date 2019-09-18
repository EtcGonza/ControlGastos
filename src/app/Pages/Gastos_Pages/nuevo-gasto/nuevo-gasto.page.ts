import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { GastosService } from '../../../Services/gastos.service';
import { ModalIconGastosPage } from '../modal-icon-gastos/modal-icon-gastos.page';

@Component({
  selector: 'app-nuevo-gasto',
  templateUrl: './nuevo-gasto.page.html',
  styleUrls: ['./nuevo-gasto.page.scss'],
})
export class NuevoGastoPage implements OnInit {

  formularioGasto: FormGroup = this.formBuilder.group({
    descripcion: ['', Validators.required],
    monto: ['', Validators.required],
    tipo: ['', Validators.required]
  });

  objectoIcono: any;
  icono = {
    existe: false,
    path: ''
  };

  constructor(private formBuilder: FormBuilder,
              private modalCtrl: ModalController,
              private navCtrl: NavController,
              private gastosService: GastosService) {}

  ngOnInit() {}

  crearGasto() {
    this.gastosService.crearGasto(
      this.formularioGasto.value.descripcion,
      this.formularioGasto.value.monto,
      this.objectoIcono.iconoPath.categoria,
      this.formularioGasto.value.tipo,
      this.objectoIcono.iconoPath.path
    );

    if (this.formularioGasto.invalid) { return; }
  }

  goBack() {
    this.navCtrl.navigateRoot(['/gastos']);
  }

  async abrirModalIcons() {
    const modal = await this.modalCtrl.create({
       component: ModalIconGastosPage
     });

    await modal.present();
    const { data } = await modal.onDidDismiss();
    this.objectoIcono = data;
    // console.log(this.objectoIcono.iconoPath.path);
    this.icono.existe = true;
    this.icono.path = `/assets/icons/${this.objectoIcono.iconoPath.path}`;
   }

}
