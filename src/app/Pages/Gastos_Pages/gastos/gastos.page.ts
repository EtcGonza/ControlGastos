import { Component, OnInit, ApplicationRef, ViewChild } from '@angular/core';
import { NavController, IonList } from '@ionic/angular';
import { GastoMes } from '../../../Models/gastoInterface';
import { GastosService } from '../../../Services/gastos.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage implements OnInit {

  misGastos: GastoMes;
  existenGastos = false;

  @ViewChild(IonList, {static: false}) lista: IonList;

  constructor(private gastosService: GastosService,
              private aplicationRef: ApplicationRef,
              private NavCtrl: NavController) {}

  ngOnInit() {
    this.obtenerCambios();
  }

  ionViewWillEnter() {
    this.gastosService.getMisGastos();
    this.cerrarSliding();
  }

  crearGasto() {
    this.NavCtrl.navigateForward('/nuevo-gasto');
  }

  comprobarGastos() {
    if (this.misGastos.Gastos.length > 0) {
      this.existenGastos = true;
    } else {
      this.existenGastos = false;
    }
  }

  obtenerCambios() {
    this.gastosService.mesListener.subscribe( (gastosMes: GastoMes) => {
      this.misGastos = gastosMes;
      this.comprobarGastos();
      this.filtrarGastos();
      // console.log('Subscribe: ', this.misGastos);
      this.aplicationRef.tick();
    });
  }

  filtrarGastos() {

    if (this.existenGastos) {
      this.misGastos.Gastos = this.misGastos.Gastos.filter( elemento => elemento.Eliminado === false );
      // console.log('Gastos Filtrados');
    } else {
      console.error('[WARNING] No hay gastos que filtrar');
    }

  }

  cerrarSliding() {
    if (this.lista) {
      this.lista.closeSlidingItems();
    }
  }

}
