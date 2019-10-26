import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { GastosService } from '../../../Services/gastos.service';
import { ModalIconGastosPage } from '../modal-icon-gastos/modal-icon-gastos.page';
import { ActivatedRoute } from '@angular/router';
import { Gasto } from '../../../Models/gastoInterface';
import { ToastService } from '../../../Services/toast.service';

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
              private activatedRoute: ActivatedRoute,
              private toastService: ToastService) {}

  ngOnInit() {
    this.idGasto = this.activatedRoute.snapshot.paramMap.get('idGasto');
    this.miGasto = this.buscarGasto();
    this.setearFormulario();
  }

  guardarGasto() {
    if (this.formularioGasto.invalid) { return; }
    this.guardarCambios();
    this.gastosService.guardarGastosStorage();
    this.toastService.editarGasto();
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

    if (this.objectoIcono === null) {
      console.log('Vacio');
    } else {
      console.log('No vacio');
    }

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

    const iconoPath = {
      path: this.icono.path,
      categoria: this.miGasto.Categoria
    };

    this.objectoIcono = {
      iconoPath
    };

    this.icono.existe = true;
    this.icono.path = this.miGasto.IconoPath;
  }

 guardarCambios() {

    console.log('El valor es: ', this.objectoIcono);
    console.log('Descripcion', this.formularioGasto.value.descripcion);


    this.miGasto.Descripcion = this.formularioGasto.value.descripcion;
    this.miGasto.Monto = this.formularioGasto.value.monto;
    this.miGasto.Tipo =  this.formularioGasto.value.tipo;
    this.miGasto.IconoPath = this.icono.path;
    this.miGasto.Categoria = this.objectoIcono.iconoPath.categoria;

  }
}
