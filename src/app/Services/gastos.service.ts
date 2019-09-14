import { Injectable } from '@angular/core';
import { GastoMes, Gasto, MisGastos, Mes } from '../Models/gastoInterface';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  misGastos: MisGastos [] = [];
  libMoment = moment().locale('es');

  constructor() {}

  crearGasto(descripcion: string, monto: number, categoria: string, tipo: string, icono: string) {

    const gastoTemp: Gasto = this.setGasto(descripcion, monto, categoria, tipo, icono);
    // Con los argumentos que recibo creo la estructura de mi gasto.


    if (tipo === 'Pasivo' || tipo === 'Activo') {
      // Primero pregunto si el tipo del Gasto es de tipo valido, sino es valido directamente salgo de la funcion.

      const añoActual = moment().year();
        // Creo una constante con el valor del año en que se esta creando el gasto.
        // Esto podria hacer se de otra manera para tener menos variables, pero asi el codigo es mas entendible.

      if (!this.misGastos.find( (elemento) => elemento.Año === this.libMoment.year() )) {
        // Ahora debo preguntar si en misGastos existe un entrada con el año en que se esta creando el gasto.
        // Esto solamente es valido cuando se crea un gasto por primera vez en el año.
        // Si esto es falso, existe ya una entrada para este año y debo buscarla en otro lado.

        console.log('No existe el año actual');

        const nuevoAño: MisGastos = this.crearNuevoAño(añoActual, gastoTemp.Monto);
        // Creo la estructura necesaria para insertar un nuevo año en misGastos.

        const gastoMes: GastoMes = this.crearGastoMes(gastoTemp.Monto);
        // Como no existe un año, tampoco existe un mes. Debo crear la estructura del mes.

        if (gastoTemp.Tipo === 'Pasivo') {
          // Ahora pregunto cual es el tipo de gasto que realizo la persona para saber en donde debo sumar su gasto, si en activo o pasivos.
          // Esto se suma tanto en el año como tambien en el mes.
          nuevoAño.PasivoAnual =+ gastoTemp.Monto;
          gastoMes.PasivoMes =+ gastoTemp.Monto;
        } else {
          nuevoAño.ActivoAnual =+ gastoTemp.Monto;
          gastoMes.ActivoMes =+ gastoTemp.Monto;
        }

        gastoMes.Gastos.push(gastoTemp);
        // El mes que cree tiene un arreglo con todos los gastos de ese mes. Debo insertar mi gasto en ese arreglo.

        const nuevoMes: Mes = this.crearNuevoMes(gastoMes);
        // Ahora creo mi objeto mes, que tiene el nombre del mes y el objeto mes que contiene el gasto.

        nuevoAño.Meses.push(nuevoMes);
        // Inserto mi mes en mi estructura de año que cree al principio. que contiene todo lo anterior hecho.
        this.misGastos.push(nuevoAño);
        // Inserto mi año en misGastos.

      } else {

        const posicionAño = this.getPosicionAño();

        console.log('Existe el año actual');

        // tslint:disable-next-line: max-line-length
        if (!this.misGastos[posicionAño].Meses.find( (elemento) => elemento.nombreMes === this.libMoment.locale('es').format('dddd, D MMMM') )) {
          
        } else {
          console.log('No existe el mes');
        }

      }

    } else {
      console.log('Tipo ingresado no Valido.');
    }

  }

  setGasto(descripcion: string, monto: number, categoria: string, tipo: string, icono: string) {

    const gastoTemp: Gasto = {
      Descripcion: descripcion,
      Monto: monto,
      Categoria: categoria,
      Tipo: tipo,
      FechaCreacion: moment().locale('es').format('dddd, D MMMM'),
      IconoPath: icono
    };

    return gastoTemp;
  }

  crearNuevoAño(año: number, gastoInicial: number) {
    const nuevoAño: MisGastos = {
      Año: año,
      Meses: [],
      GastosAnual: gastoInicial,
      ActivoAnual: 0,
      PasivoAnual: 0,
    };

    return nuevoAño;
  }

  crearNuevoMes(mes: GastoMes) {
    const nuevoMes: Mes = {
      nombreMes: moment().locale('es').format('MMMM'),
      MisGastos: mes
    };

    return nuevoMes;
  }

  crearGastoMes(gastoInicial: number) {
    const gastoMes: GastoMes = {
      GastoTotalMes: gastoInicial,
      PasivoMes: 0,
      ActivoMes: 0,
      Gastos: []
    };

    return gastoMes;
  }

  getPosicionAño(): number {
   return this.misGastos.findIndex( (elemento) => elemento.Año === this.libMoment.year() );
  }
}
