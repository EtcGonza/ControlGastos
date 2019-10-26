import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DeudaService } from '../../../Services/deuda.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Deuda } from '../../../Models/deudaInterface';
import { ToastService } from '../../../Services/toast.service';

@Component({
  selector: 'app-editar-deuda',
  templateUrl: './editar-deuda.page.html',
  styleUrls: ['./editar-deuda.page.scss'],
})
export class EditarDeudaPage implements OnInit {

  idDeuda: string;
  miDeuda: Deuda;

  formularioDeuda: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    monto: ['', Validators.required],
    sexo: ['', Validators.required],
    tipo: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private deudaService: DeudaService,
              private navController: NavController,
              private activatedRoute: ActivatedRoute,
              private toastService: ToastService) {}

  ngOnInit() {
    this.idDeuda = this.activatedRoute.snapshot.paramMap.get('idDeuda');
    this.miDeuda = this.buscarDeuda();
    this.setearFormulario();
  }

  guardarDeuda() {

    if (this.formularioDeuda.invalid) { return; }
    this.guardarCambios();
    this.deudaService.guardarDeudasStorage();
    this.toastService.editarDeudaToast();
  }

  buscarDeuda() {
    return this.deudaService.buscarDeuda(this.idDeuda);
  }

  goBack() {
    this.navController.navigateRoot(['/deudas']);
  }

  setearFormulario() {
    this.formularioDeuda.setValue({
      nombre: this.miDeuda.Nombre,
      monto: this.miDeuda.Monto,
      sexo: this.miDeuda.Sexo,
      tipo: this.miDeuda.Tipo
    });
  }

  guardarCambios() {
    this.miDeuda.Sexo = this.formularioDeuda.value.sexo;
    this.miDeuda.Nombre = this.formularioDeuda.value.nombre;
    this.miDeuda.Tipo = this.formularioDeuda.value.tipo;
    this.miDeuda.Monto = this.formularioDeuda.value.monto;
    this.miDeuda.AvatarPath = this.deudaService.asignarAvatar(this.miDeuda.Sexo);
  }

}
