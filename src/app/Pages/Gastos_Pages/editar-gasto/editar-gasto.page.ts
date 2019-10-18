import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { GastosService } from '../../../Services/gastos.service';
import { ModalIconGastosPage } from '../modal-icon-gastos/modal-icon-gastos.page';
import { ActivatedRoute } from '@angular/router';
import { Gasto } from '../../../Models/gastoInterface';

@Component({
  selector: 'app-editar-gasto',
  templateUrl: './editar-gasto.page.html',
  styleUrls: ['./editar-gasto.page.scss'],
})
export class EditarGastoPage implements OnInit {

  idGasto: string;
  miGasto: Gasto;

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
              private gastosService: GastosService,
              private activatedRoute: ActivatedRoute ) {}

  ngOnInit() {
    this.idGasto = this.activatedRoute.snapshot.paramMap.get('idGasto');
    this.miGasto = this.buscarGasto();
    this.setearFormulario();
  }

  guardarGasto() {
    if (this.formularioGasto.invalid) { return; }
    this.guardarCambios();
    this.gastosService.guardarGastosStorage();
  }

  buscarGasto() {
    return this.gastosService.buscarGasto(this.idGasto);
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

  goBack() {
    this.navCtrl.navigateRoot(['/gastos']);
  }

  setearFormulario() {
    this.formularioGasto.setValue({
      descripcion: this.miGasto.Descripcion,
      monto: this.miGasto.Monto,
      tipo: this.miGasto.Tipo
    });

    this.icono.existe = true;
    this.icono.path = this.miGasto.IconoPath;
  }

  guardarCambios() {
    this.miGasto.Descripcion = this.formularioGasto.value.descripcion;
    this.miGasto.Monto = this.formularioGasto.value.monto;
    this.miGasto.Categoria = this.objectoIcono.iconoPath.categoria;
    this.miGasto.Tipo =  this.formularioGasto.value.tipo;
    this.miGasto.IconoPath = this.icono.path;
  }
}
