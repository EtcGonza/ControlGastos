import { Pipe, PipeTransform } from '@angular/core';
import { DeudaService } from '../Services/deuda.service';
import { Deuda } from '../Models/deudaInterface';
import { from } from 'rxjs';

@Pipe({
  name: 'deudasTipo'
})
export class DeudasTipoPipe implements PipeTransform {

  constructor(public deudaService: DeudaService) {}

  // tslint:disable-next-line: align
  async transform(tipoCobrar: boolean) {

    console.log('Argumento pasado: ', tipoCobrar);

    if (tipoCobrar === true) {

      return this.deudaService.getDeudas().map(
        data => {
          if (data.Tipo === 'Pagar') {
            return data;
          }
        }
      );

    } else if (tipoCobrar === false) {

      // console.log('Mostrando Cobrar');

      return this.deudaService.getDeudas().map(
        data => {
          if (data.Tipo === 'Cobrar') {
            return data;
          }
        }
      );
    }



  }

}
