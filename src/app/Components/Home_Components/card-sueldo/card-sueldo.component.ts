import { Component, OnInit, Input } from '@angular/core';
import { MiBilleteraService } from '../../../Services/mi-billetera.service';

@Component({
  selector: 'app-card-sueldo',
  templateUrl: './card-sueldo.component.html',
  styleUrls: ['./card-sueldo.component.scss'],
})
export class CardSueldoComponent implements OnInit {

  sueldo = 0;

  constructor(private miBilleteraService: MiBilleteraService) { }

  ngOnInit() {
    this.sueldo = this.miBilleteraService.getSueldo();
    this.obtenerCambios();
  }

  obtenerCambios() {
    this.miBilleteraService.sueldoListener.subscribe( (sueldo: number) => {
      // console.log('recibo: ', sueldo);
      this.sueldo = sueldo;
    });
  }

}
