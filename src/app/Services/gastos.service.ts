import { Injectable, EventEmitter } from '@angular/core';
import { GastoMes, Gasto, MisGastos, Mes } from '../Models/gastoInterface';
import * as moment from 'moment';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  misGastos: MisGastos [] = [];
  libMoment = moment().locale('es');

  // gastosListener = new EventEmitter <MisGastos []> ();
  mesListener = new EventEmitter <GastoMes> ();

  constructor(private storage: Storage) {
    this.cargarGastosStorage();
  }

  crearGasto(descripcion: string, monto: number, categoria: string, tipo: string, icono: string) {

    // Con los argumentos que recibo creo la estructura de mi gasto.
    const gastoTemp: Gasto = this.setGasto(descripcion, monto, categoria, tipo, icono);

    // Primero pregunto si el tipo del Gasto es de tipo valido, sino es valido directamente salgo de la funcion.
    if (tipo === 'Pasivo' || tipo === 'Activo') {
      console.log('[OK] Tipo Valido');

      // Creo una constante con el valor del año en que se esta creando el gasto.
      // Esto podria hacer se de otra manera para tener menos variables, pero asi el codigo es mas entendible.
      const añoActual = moment().year();

      // Ahora debo preguntar si en misGastos existe un entrada con el año en que se esta creando el gasto.
      // Esto solamente es valido cuando se crea un gasto por primera vez en el año.
      // Si esto es falso, existe ya una entrada para este año y debo buscarla en otro lado.
      if (!this.existeAñoActual()) {
        console.log('[OK] Nuevo año y mes creado.');

        // Creo la estructura necesaria para insertar un nuevo año en misGastos.
        const nuevoAño: MisGastos = this.crearNuevoAño(añoActual, gastoTemp.Monto);

        // Como no existe un año, tampoco existe un mes. Debo crear la estructura del mes.
        const gastoMes: GastoMes = this.crearGastoMes(gastoTemp.Monto);

        // Ahora pregunto cual es el tipo de gasto que realizo la persona para saber en donde debo sumar su gasto, si en activo o pasivos.
        // Esto se suma tanto en el año como tambien en el mes.
        this.sumarPasivoActivoAño(nuevoAño, gastoTemp);
        this.sumarPasivoActivoMes(gastoMes, gastoTemp);

        // El mes que cree tiene un arreglo con todos los gastos de ese mes. Debo insertar mi gasto en ese arreglo.
        this.insertarGastoEnMes(gastoMes, gastoTemp);

        // Ahora creo mi objeto mes, que tiene el nombre del mes y el objeto mes que contiene el gasto.
        const nuevoMes: Mes = this.crearNuevoMes(gastoMes);

        // Inserto mi mes en mi estructura de año que cree al principio. que contiene todo lo anterior hecho.
        this.insertarMesEnAño(nuevoAño, nuevoMes);

        // Inserto mi año en misGastos.
        this.misGastos.push(nuevoAño);

      } else {
        console.log('[OK] Existe el año actual.');

        // const posicionAño = this.getPosicionAño();
        // tslint:disable-next-line: no-shadowed-variable
        const añoActual = this.getAñoActual();

        // Necesito la posicion dentro del arreglo de meses para poder insertar mi gasto.
        const mesActual = this.getMesActual();

        // Ahora debo consultar si existe el mes actual en el año en que estoy.
        // tslint:disable-next-line: max-line-length
        if (!this.existeMesEnAño(añoActual)) {
          // Si entre, significa que el mes existe y tengo que buscar el mes y insertar el gasto en el.
          console.log('[OK] Mes existente.');

        // Inserto mi gasto dentro del arreglo de gastos del mes actual.
          this.insertarGastoEnMes(mesActual.GastosMes, gastoTemp);

        // Sumo el monto de gastoTemp al gasto anual.
          this.sumarGastoAnual(añoActual, gastoTemp.Monto);

        // Sumo el gasto a los gastos totales del mes.
          this.sumarGastoTotalesMes(mesActual.GastosMes, gastoTemp.Monto);

        // Ahora necesito saber si el gasto es de tipo Pasivo o Activo.
        // Para poder saber donde tengo que sumar los montos.
          this.sumarPasivoActivoAño(añoActual, gastoTemp);
          this.sumarPasivoActivoMes(mesActual.GastosMes, gastoTemp);

      } else {
        // No entre, el mes no existe por lo tanto debo crear y insertar mi gasto en el.
        console.log('[OK] No existe el mes.');

        // Como no existe un año, tampoco existe un mes. Debo crear la estructura del mes.
        const gastoMes: GastoMes = this.crearGastoMes(gastoTemp.Monto);

        // Creo la estructura de mes nuevo.
        const nuevoMes: Mes = this.crearNuevoMes(gastoMes);

        // A los gastos totales del mes le sumo el monto de mi nuevo gasto.
        this.sumarGastoTotalesMes(gastoMes, gastoTemp.Monto);

        // Inserto en mi arreglo de gastos el nuevo gasto que recibi.
        this.insertarGastoEnMes(gastoMes, gastoTemp);

        // Ahora necesito saber si el gasto es de tipo Pasivo o Activo.
        // Para poder saber donde tengo que sumar los montos.
        this.sumarPasivoActivoAño(añoActual, gastoTemp);
        this.sumarPasivoActivoMes(nuevoMes.GastosMes, gastoTemp);

        // Inserto el mes que cree en mi año actual.
        this.insertarMesEnAño(añoActual, nuevoMes);
        }
      }
      const mesActual = this.getMesActual();
      // Emito el cambio de misGastos a todos los subscriptos.
      this.mesListener.emit(mesActual.GastosMes);
    } else {
      // Por algun motivo el gasto que se creo no es ni PASIVO ni ACTIVO. Por lo tanto surge un error.
      console.error('[ERROR] Tipo ingresado no Valido.');
      return;
    }

    // Guardar en Storage
    this.guardarGastosStorage();
    console.log('Guarde en Storage');

  }

  setGasto(descripcion: string, monto: number, categoria: string, tipo: string, icono: string) {

    const gastoTemp: Gasto = {
      Descripcion: descripcion,
      Monto: monto,
      Categoria: categoria,
      Tipo: tipo,
      Eliminado: false,
      FechaCreacion: moment().locale('es').format('L'),
      IconoPath: this.asignarIcono(icono)
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

  crearNuevoMes(mes: GastoMes): Mes {
    const nuevoMes: Mes = {
      NombreMes: moment().locale('es').format('MMMM'),
      GastosMes: mes
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
    // Toma el año actual y lo busca dentro del arreglo de años de la variable 'MisGastos' y devuelve la posicion.
   return this.misGastos.findIndex( (elemento) => elemento.Año === this.libMoment.year() );
  }

  getAñoActual(): MisGastos {
    const posicionAño = this.getPosicionAño();
    return this.misGastos[posicionAño];
  }

  getPosicionMes(): number {
    const añoPos = this.getPosicionAño();
    return this.misGastos[añoPos].Meses.findIndex( (elemento) => elemento.NombreMes === this.libMoment.locale('es').format('MMMM') );
  }

  getMesActual(): Mes {
    const posicionMes = this.getPosicionMes();
    const posicionAño = this.getPosicionAño();
    return this.misGastos[posicionAño].Meses[posicionMes];
  }

  insertarGastoEnMes(gastoMes: GastoMes , gastoTemp: Gasto) {
   gastoMes.Gastos.push(gastoTemp);
  }

  sumarGastoAnual(año: MisGastos, monto: number) {
    año.GastosAnual = año.GastosAnual + monto;
  }

  sumarGastoTotalesMes(mes: GastoMes, monto: number) {
  mes.GastoTotalMes = mes.GastoTotalMes + monto;
  }

  insertarMesEnAño(año: MisGastos, mes: Mes) {
    año.Meses.push(mes);
  }

  sumarPasivoActivoAño(año: MisGastos, gastoTemp: Gasto) {
    if (gastoTemp.Tipo === 'Pasivo') {
      año.PasivoAnual = año.PasivoAnual + gastoTemp.Monto;
    } else {
      año.ActivoAnual = año.ActivoAnual + gastoTemp.Monto;
    }
  }

  sumarPasivoActivoMes(mes: GastoMes, gastoTemp: Gasto) {
    if (gastoTemp.Tipo === 'Pasivo') {
      mes.PasivoMes = gastoTemp.Monto;
    } else {
      mes.ActivoMes = gastoTemp.Monto;
    }
  }

  existeMesEnAño(añoActual: MisGastos): Mes {
    return añoActual.Meses.find( (elemento) => elemento.NombreMes === this.libMoment.locale('es').format('dddd, D MMMM') );
  }

  existeAñoActual() {
    return this.misGastos.find((elemento) => elemento.Año === this.libMoment.year());
  }

  getMisGastos(): any {
    const mesActual = this.getMesActual();
    this.mesListener.emit(mesActual.GastosMes);
  }

  asignarIcono(icono: string) {
    return `/assets/icons/${icono}`;
  }

  eliminarGasto(gasto: Gasto) {
    gasto.Eliminado = true;
    const mesActual = this.getMesActual();

    // Guardar en Storage
    this.guardarGastosStorage();
    console.log('Gasto eliminado:' , this.misGastos);
    this.mesListener.emit(mesActual.GastosMes);
  }

  guardarGastosStorage() {
    this.storage.set('misgastos', this.misGastos);
  }

  async cargarGastosStorage() {
    const gastos = await this.storage.get('misgastos');

    if (gastos) {
      this.misGastos = gastos;
    } else {
      console.log('No existen gastos en el storage');
      this.misGastos = [];
    }
  }
}
