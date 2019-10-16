import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Deuda } from 'src/app/Models/deudaInterface';
import { DeudaService } from 'src/app/Services/deuda.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-deudas',
  templateUrl: './deudas.page.html',
  styleUrls: ['./deudas.page.scss'],
})
export class DeudasPage implements OnInit {

  filtroCompletas = false;
  filtroPagar = true;
  filtroCobrar = true;

  existePagar = false;
  existeCobrar = false;
  existePagarCompletas = false;
  existeCobrarCompletas = false;

  mostrarCompletadas = false;

  misDeudas: Deuda[] = [];
  deudasPagar: Deuda[] = [];
  deudasCobrar: Deuda[] = [];
  pagarCompletadas: Deuda[] = [];
  cobrarCompletadas: Deuda[] = [];

  constructor(private deudaService: DeudaService,
              private navController: NavController,
              private aplicationRef: ApplicationRef) {}

  ngOnInit() {
    this.deudaService.deudasListener.subscribe((deudas: Deuda[]) => {
      this.misDeudas = deudas;
      this.filtrarDeudas();
      this.existenCobrar();
      this.existenPagar();
      this.existenCobrarCompletas();
      this.existenPagarCompletas();

      this.aplicationRef.tick();
    });
  }

  existenPagar() {
    if (this.deudasPagar.length > 0) {
      this.existePagar = true;
    } else {
      this.existePagar = false;
    }
  }

  existenCobrar() {
    if (this.deudasCobrar.length > 0) {
      this.existeCobrar = true;
    } else {
      this.existeCobrar = false;
    }
  }

  existenPagarCompletas() {
    if (this.pagarCompletadas.length > 0) {
      this.existePagarCompletas = true;
    } else {
      this.existePagarCompletas = false;
    }
  }

  existenCobrarCompletas() {
    if (this.cobrarCompletadas.length > 0) {
      this.existeCobrarCompletas = true;
    } else {
      this.existeCobrarCompletas = false;
    }
  }

  filtroTipo(event) {
    if (event.detail.value === 'todos') {
      this.filtroPagar = true;
      this.filtroCobrar = true;
    } else if (event.detail.value === 'pagar') {
      this.filtroPagar = true;
      this.filtroCobrar = false;
    } else if (event.detail.value === 'cobrar') {
      this.filtroPagar = false;
      this.filtroCobrar = true;
    } else {
      console.log('Error en los filtros');
    }
  }

  filtroCompleta(event) {
    if (event.detail.value === 'si') {
      this.filtroCompletas = true;
    } else if (event.detail.value === 'no') {
      this.filtroCompletas = false;
    }
  }

  filtrarDeudas() {
   this.deudasPagar = this.misDeudas.filter(deuda => deuda.Tipo === 'Pagar' && deuda.Completada === false );
   this.deudasCobrar = this.misDeudas.filter(deuda => deuda.Tipo === 'Cobrar' && deuda.Completada === false );

   this.pagarCompletadas = this.misDeudas.filter(deuda => deuda.Tipo === 'Pagar' && deuda.Completada === true );
   this.cobrarCompletadas = this.misDeudas.filter(deuda => deuda.Tipo === 'Cobrar' && deuda.Completada === true );
  }

  navCrearDeuda() {
    this.navController.navigateRoot('/nueva-deuda');
  }

}
