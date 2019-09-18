import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DeudaService } from 'src/app/Services/deuda.service';

@Component({
  selector: 'app-nueva-deuda',
  templateUrl: './nueva-deuda.page.html',
  styleUrls: ['./nueva-deuda.page.scss'],
})

export class NuevaDeudaPage implements OnInit {

  formularioDeuda: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    monto: ['', Validators.required],
    sexo: ['', Validators.required],
    tipo: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private deudaService: DeudaService,
              private navController: NavController) {}

  ngOnInit() {}

  crearDeuda() {

    this.deudaService.crearDeuda(
      this.formularioDeuda.value.tipo,
      this.formularioDeuda.value.nombre,
      this.formularioDeuda.value.monto,
      this.formularioDeuda.value.sexo
      );

    if (this.formularioDeuda.invalid) { return; }
  }

  goBack() {
    this.navController.navigateRoot(['/deudas']);
  }
}
