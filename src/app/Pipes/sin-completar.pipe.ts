import { Pipe, PipeTransform } from '@angular/core';
import { Deuda } from '../Models/deudaInterface';

@Pipe({
  name: 'sinCompletar'
})
export class SinCompletarPipe implements PipeTransform {

  transform(deudasArray: Deuda []): any {

    console.log('Entra', deudasArray);

    const sinCompletar = deudasArray.filter( deuda => {
      console.log(deuda);
      return deuda.Completada === false;
    });

    return sinCompletar;

  }

}
