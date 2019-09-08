import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DeudaService } from 'src/app/Services/deuda.service';

@Component({
  selector: 'app-crear-deuda',
  templateUrl: './crear-deuda.component.html',
  styleUrls: ['./crear-deuda.component.scss'],
})

export class CrearDeudaComponent implements OnInit {

  formularioDeuda: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private deudaService: DeudaService,
              private navController: NavController) {}

  ngOnInit() {
    this.formularioDeuda = this.formBuilder.group({
      nombre: ['', Validators.required],
      monto: ['', Validators.required],
      sexo: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  get f() {
    return this.formularioDeuda.controls;
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  crearDeuda() {
    this.submitted = true;

    // console.log(this.formularioDeuda.value);

    this.deudaService.crearDeuda(
      this.formularioDeuda.value.tipo,
      this.formularioDeuda.value.nombre,
      this.formularioDeuda.value.monto,
      this.formularioDeuda.value.sexo
      );

    if (this.formularioDeuda.invalid) {
      return;
    }
  }

  goBack() {
    this.navController.navigateRoot(['/lista-deudas']);
  }

}
