import { Pipe, PipeTransform } from '@angular/core';
import { DeudaService } from '../Services/deuda.service';
import { Deuda } from '../Models/deudaInterface';

@Pipe({
  name: 'deudasTipo'
})
export class DeudasTipoPipe implements PipeTransform {

  constructor(public deudaService: DeudaService) {}

  transform(tipoDeuda: string): Deuda [] {
    return this.deudaService.deudas.filter( deudas =>  deudas.Tipo === tipoDeuda );
  }

}
