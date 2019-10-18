import { Component, OnInit, Input } from '@angular/core';
import { Gasto } from '../../../Models/gastoInterface';
import { GastosService } from '../../../Services/gastos.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-card-gasto',
  templateUrl: './card-gasto.component.html',
  styleUrls: ['./card-gasto.component.scss'],
})

export class CardGastoComponent implements OnInit {

  @Input() gasto: Gasto;

  constructor(private gastoService: GastosService,
              private NavCtrl: NavController) {}

  ngOnInit() {}

  eliminarGasto() {
    this.gastoService.eliminarGasto(this.gasto);
  }

  editarGasto() {
    this.NavCtrl.navigateForward(`/editar-gasto/${this.gasto.Id}`);
  }
}
