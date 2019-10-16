import { Component, OnInit, Input } from '@angular/core';
import { Gasto } from '../../../Models/gastoInterface';
import { GastosService } from '../../../Services/gastos.service';

@Component({
  selector: 'app-card-gasto',
  templateUrl: './card-gasto.component.html',
  styleUrls: ['./card-gasto.component.scss'],
})

export class CardGastoComponent implements OnInit {

  @Input() gasto: Gasto;

  constructor(private gastoService: GastosService) {}

  ngOnInit() {
    // console.log(this.gasto);
  }

  eliminarGasto() {
    this.gastoService.eliminarGasto(this.gasto);
  }
}
