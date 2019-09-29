import { Injectable, EventEmitter } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Deuda } from '../Models/deudaInterface';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class DeudaService {

  deudas: Deuda [] = [];
  deudasListener = new EventEmitter <Deuda []> ();

  constructor(private storage: StorageService) {}

  crearDeuda(tipo: string , nombre: string, monto: number, sexo: string) {

    // tslint:disable-next-line: prefer-const
    let insertarDeuda: Deuda = this.setDeuda(nombre, monto, sexo);

    if (tipo === 'pagar') {
      insertarDeuda.Tipo = 'Pagar';
      this.deudas.unshift(insertarDeuda);
      this.deudasListener.emit(this.deudas);

      // console.log('Se inserto en porPagar', this.deudas);

      // this.storage.guardarDeudas(this.porCobrar, 'pagar');

    } else if (tipo === 'cobrar') {
      insertarDeuda.Tipo = 'Cobrar';
      this.deudas.unshift(insertarDeuda);
      this.deudasListener.emit(this.deudas);

      // console.log('Se inserto en porCobrar', this.deudas);

      // this.storage.guardarDeudas(this.porCobrar, 'cobrar');

    } else {
      console.log('El tipo no es valido');
    }

  }

  asignarAvatar(sexo: string) {
    const randomNumber = Math.floor(Math.random() * 8) + 1;

    if (sexo === 'hombre') {
      return `/assets/personas-icons/hombre/hombre_${randomNumber}.svg`;

   } else if ( sexo === 'mujer') {

      return `/assets/personas-icons/mujeres/mujer_${randomNumber}.svg`;

   } else if (sexo === 'otro') {

    if (randomNumber / 2 === 0) {
      return `/assets/personas-icons/mujeres/mujer_${randomNumber}.svg`;
    } else {
      return `/assets/personas-icons/hombre/hombre_${randomNumber}.svg`;
    }

   } else {

    return `/assets/personas-icons/noImage.svg`;
   }
  }

  eliminarDeuda(deuda: Deuda) {

    let index: number;

    index = this.deudas.indexOf(deuda);

    console.log('Index es: ', index);

    if (index !== -1) {
        this.deudas.splice(index, 1);
        this.deudasListener.emit(this.deudas);
      } else {
        console.log('Error al querer eliminar la deuda');
      }

  }

  // completarDeuda(deuda: Deuda) {

  //   deuda.Completada = true;
  //   deuda.FechaCompletado = moment().locale('es').format('dddd, D MMMM');

  //   if (deuda.Tipo === 'Pagar') {
  //     this.completadasPagar.unshift(deuda);
  //     this.eliminarDeuda(deuda.id, deuda.Tipo);

  //   } else if (deuda.Tipo === 'Cobrar') {
  //     this.completadasCobrar.unshift(deuda);
  //     this.eliminarDeuda(deuda.id, deuda.Tipo);
  //   }

  // }

  setDeuda(nombre: string, monto: number, sexo: string) {

    const setearDeuda: Deuda = {
      Tipo: 'Pagar',
      id: uuid(),
      Nombre: nombre,
      Monto: monto,
      FechaCreada: moment().locale('es'),
      Completada: false,
      FechaCompletado: false,
      AvatarPath: this.asignarAvatar(sexo),
    };
    return setearDeuda;
  }

  getDeudas() {
    return this.deudas;
  }
}

// moment().locale('es').format('dddd, D MMMM'),
