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

    if (tipo === 'Pasivo' || tipo === 'Activo') {

      const añoActual = moment().year();
      const gastoTemp: Gasto = this.setGasto(descripcion, monto, categoria, tipo, icono);
      console.log('Mi gasto', gastoTemp);

      if (!this.misGastos.find( (elemento) => elemento.Año === añoActual )) {

        console.log('No existe el año actual');

        let nuevoAño: MisGastos = this.crearNuevoAño(añoActual, gastoTemp.Monto);

        let gastoMes: GastoMes = this.crearGastoMes(gastoTemp.Monto);

        if (gastoTemp.Tipo === 'Pasivo') {
          nuevoAño.PasivoAnual =+ gastoTemp.Monto;
          gastoMes.PasivoMes =+ gastoTemp.Monto;
        } else {
          nuevoAño.ActivoAnual =+ gastoTemp.Monto;
          gastoMes.ActivoMes =+ gastoTemp.Monto;
        }

        gastoMes.Gastos.push(gastoTemp);

        let nuevoMes: Mes = this.crearNuevoMes(gastoMes);

        nuevoAño.Meses.push(nuevoMes);
        this.misGastos.push(nuevoAño);
        // console.log(this.misGastos);

        this.misGastos.push();

      } else {
        console.log('Existe el año actual');
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

}
