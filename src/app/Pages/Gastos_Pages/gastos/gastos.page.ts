import { Component, OnInit, ApplicationRef } from '@angular/core';
import { NavController } from '@ionic/angular';
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

  constructor(private gastosService: GastosService,
              private aplicationRef: ApplicationRef,
              private NavCtrl: NavController) {}

  ngOnInit() {
    this.gastosService.mesListener.subscribe( (gastosMes: GastoMes) => {
      this.misGastos = gastosMes;
      console.log('Subscribe: ', this.misGastos);

      if (this.misGastos.Gastos.length > 0) {
        this.existenGastos = true;
      } else {
        this.existenGastos = false;
      }

      this.aplicationRef.tick();
    });
  }

  crearGasto() {
    this.NavCtrl.navigateForward('/nuevo-gasto');
  }

}
