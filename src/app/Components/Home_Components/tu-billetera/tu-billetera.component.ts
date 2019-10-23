import { Component, OnInit, Input } from '@angular/core';
import { MiBilleteraService } from '../../../Services/mi-billetera.service';

@Component({
  selector: 'app-tu-billetera',
  templateUrl: './tu-billetera.component.html',
  styleUrls: ['./tu-billetera.component.scss'],
})
export class TuBilleteraComponent implements OnInit {

  saldoBilletera = 0;

  constructor(private miBilleteraService: MiBilleteraService) { }

  ngOnInit() {
    this.saldoBilletera = this.miBilleteraService.getBilletera();
    this.obtenerCambios();
  }

  obtenerCambios() {
    this.miBilleteraService.billeteraListener.subscribe( (billetera: number) => {
      console.log('recibo: ', billetera);
      this.saldoBilletera = billetera;
    });
  }

}
