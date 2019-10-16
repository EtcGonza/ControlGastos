import { Component, OnInit, Input } from '@angular/core';
import { Gasto } from '../../../Models/gastoInterface';

@Component({
  selector: 'app-card-gasto',
  templateUrl: './card-gasto.component.html',
  styleUrls: ['./card-gasto.component.scss'],
})
export class CardGastoComponent implements OnInit {

  @Input() gasto: Gasto;

  constructor() {}

  ngOnInit() {
    // console.log(this.gasto);
  }

  borrarGasto() {}
}
