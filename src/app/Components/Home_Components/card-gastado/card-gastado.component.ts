import { Component, OnInit, Input } from '@angular/core';
import { MiBilleteraService } from '../../../Services/mi-billetera.service';

@Component({
  selector: 'app-card-gastado',
  templateUrl: './card-gastado.component.html',
  styleUrls: ['./card-gastado.component.scss'],
})
export class CardGastadoComponent implements OnInit {

  gastado = 0;

  constructor(private miBilleteraService: MiBilleteraService) { }

  ngOnInit() {
    this.gastado = this.miBilleteraService.getGastado();
    this.obtenerCambios();
  }

  obtenerCambios() {
    this.miBilleteraService.gastadoListener.subscribe( (gastado: number) => {
      // console.log('recibo: ', gastado);
      this.gastado = gastado;
    });
  }

}
