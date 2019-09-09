import { Injectable, EventEmitter } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Deuda } from '../Models/deudaInterface';

@Injectable({
  providedIn: 'root'
})
export class DeudaService {

  porPagar: Deuda [] = [];
  porCobrar: Deuda [] = [];
  completadasPagar: Deuda [] = [];
  completadasCobrar: Deuda [] = [];

  pagarListener = new EventEmitter <Deuda []> ();
  cobrarListener = new EventEmitter <Deuda []> ();

  constructor() {}

  crearDeuda(tipo: string , nombre: string, monto: number, sexo: string) {

    // tslint:disable-next-line: prefer-const
    let insertarDeuda: Deuda = this.setearDeuda();

    insertarDeuda.AvatarPath = this.asignarAvatar(sexo);
    insertarDeuda.Completada = false;
    insertarDeuda.FechaCreada = Date().toString();
    insertarDeuda.Monto = monto;
    insertarDeuda.Nombre = nombre;
    insertarDeuda.id = uuid();

    if (tipo === 'pagar') {
      insertarDeuda.Tipo = 'Pagar';
      this.porPagar.unshift(insertarDeuda);
      this.pagarListener.emit(this.porPagar);

      // console.log('Se inserto en porPagar', this.porPagar);

    } else if (tipo === 'cobrar') {
      insertarDeuda.Tipo = 'Cobrar';
      this.porCobrar.unshift(insertarDeuda);
      this.cobrarListener.emit(this.porCobrar);

      // console.log('Se inserto en porCobrar', this.porCobrar);

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

   } else {

      return `/assets/personas-icons/noImage.svg`;
     }
  }

  eliminarDeuda(id: any, tipo: string) {
    let deuda: Deuda;
    let index: number;

    if (tipo === 'Pagar') {

        deuda = this.porPagar.find( deuda => deuda.id === id);
        index = this.porPagar.indexOf(deuda);

        if (index !== -1) {
        this.porPagar.splice(index, 1);
      }

        return;
    } else if (tipo === 'Cobrar') {

        deuda = this.porCobrar.find( deuda => deuda.id === id);
        index = this.porCobrar.indexOf(deuda);

        if (index !== -1) {
        this.porCobrar.splice(index, 1);
      }

        return;

    } else {
      console.log('Tipo ingresado no valido.');
    }
  }

  completarDeuda(deuda: Deuda) {

    deuda.Completada = true;
    deuda.FechaCompletado = new Date().toString();

    if (deuda.Tipo === 'Pagar') {
      this.completadasPagar.unshift(deuda);
      // console.log('Deuda Completada', this.completadasPagar);
      this.eliminarDeuda(deuda.id, deuda.Tipo);

    } else if (deuda.Tipo === 'Cobrar') {
      this.completadasCobrar.unshift(deuda);
      // console.log('Deuda Completada', this.completadasCobrar);
      this.eliminarDeuda(deuda.id, deuda.Tipo);
    }

  }

  setearDeuda() {

    const setearDeuda: Deuda = {
      Tipo: 'Pagar',
      id: '',
      Nombre: '',
      Monto: 0,
      FechaCreada: null,
      Completada: false,
      FechaCompletado: false,
      AvatarPath: '',
    };

    return setearDeuda;
  }
}