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

  existePagar = false;
  existeCobrar = false;
  mostrarCompletadas = false;

  misDeudas: Deuda[] = [];
  deudasPagar: Deuda[] = [];
  deudasCobrar: Deuda[] = [];

  constructor(private deudaService: DeudaService,
              private navController: NavController,
              private aplicationRef: ApplicationRef) {}

  ngOnInit() {
    this.deudaService.deudasListener.subscribe((deudas: Deuda[]) => {
      this.misDeudas = deudas;
      this.filtrarDeudas();
      this.aplicationRef.tick();

      this.existenCobrar();
      this.existenPagar();
    });

    // this.deudaService.pagarListener.subscribe( (porPagar: Deuda []) => {
    //   this.listaPagar = porPagar;
    //   this.existenPagar = this.pagarLength();
    //   this.aplicationRef.tick();
    // });

    // this.deudaService.cobrarListener.subscribe( (porCobrar: Deuda []) => {
    //   this.listaCobrar = porCobrar;
    //   this.existenCobra = this.cobrarLength();
    //   this.aplicationRef.tick();
    // });

    // this.completadasCobrar = this.deudaService.completadasCobrar;
    // this.completadasPagar = this.deudaService.completadasPagar;

  }

  mostrar(event) {
    if (event.detail.value === 'completadas') {
      this.mostrarCompletadas = true;
    } else {
      this.mostrarCompletadas = false;
    }
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

  // buscarDeuda(tipo: string) {
  //   let existeTipo;
  //   return existeTipo = this.misDeudas.find((deuda) => {
  //     if (deuda.Tipo === tipo) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  // }

  filtrarDeudas() {
   this.deudasPagar = this.misDeudas.filter(deuda => deuda.Tipo === 'Pagar');
   this.deudasCobrar = this.misDeudas.filter(deuda => deuda.Tipo === 'Cobrar');
  }

  navCrearDeuda() {
    this.navController.navigateRoot('/nueva-deuda');
  }

}
