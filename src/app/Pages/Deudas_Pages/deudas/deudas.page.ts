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

  listaPagar: Deuda [] = [];
  listaCobrar: Deuda [] = [];

  completadasPagar: Deuda [] = [];
  completadasCobrar: Deuda [] = [];

  existenPagar: boolean;
  existenCobra: boolean;
  mostrarCompletadas = false;

  constructor(private deudaService: DeudaService,
              private navController: NavController,
              private aplicationRef: ApplicationRef) {}

   ngOnInit() {

    this.deudaService.pagarListener.subscribe( (porPagar: Deuda []) => {
      this.listaPagar = porPagar;
      this.existenPagar = this.pagarLength();
      this.aplicationRef.tick();
    });

    this.deudaService.cobrarListener.subscribe( (porCobrar: Deuda []) => {
      this.listaCobrar = porCobrar;
      this.existenCobra = this.cobrarLength();
      this.aplicationRef.tick();
    });

    this.completadasCobrar = this.deudaService.completadasCobrar;
    this.completadasPagar = this.deudaService.completadasPagar;

  }

  mostrar(event) {
    if (event.detail.value === 'completadas') {
      this.mostrarCompletadas = true;
    } else {
      this.mostrarCompletadas = false;
    }
  }

  pagarLength() {
    if (this.listaPagar.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  cobrarLength() {
    if (this.listaCobrar.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  navCrearDeuda() {
    this.navController.navigateForward('/nueva-deuda');
  }

}
