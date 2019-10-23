import { Injectable, EventEmitter } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Deuda } from '../Models/deudaInterface';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { Storage } from '@ionic/storage';
import { MiBilleteraService } from './mi-billetera.service';

@Injectable({
  providedIn: 'root'
})
export class DeudaService {

  deudas: Deuda [] = [];
  deudasListener = new EventEmitter <Deuda []> ();

  constructor(private storage: Storage,
              private billeteraService: MiBilleteraService) {
    this.cargarDeudasStorage();
  }

  async cargarDeudasStorage() {
    const misDeudas = await this.storage.get('misdeudas');

    if (misDeudas) {
      this.deudas = misDeudas;
      console.log('Existen Deudas');
    } else {
      console.error('[WARNING] No hay deudas para cargar (Contexto: DEUDA SERVICE).');
      this.deudas = [];
    }
  }

  guardarDeudasStorage() {
    this.storage.set('misdeudas', this.deudas);
    console.log('Deudas Guardadas');
  }

  crearDeuda(tipo: string , nombre: string, monto: number, sexo: string) {

    const insertarDeuda: Deuda = this.setDeuda(nombre, monto, sexo);

    if (tipo === 'Pagar') {
      insertarDeuda.Tipo = 'Pagar';
      this.deudas.unshift(insertarDeuda);
      this.deudasListener.emit(this.deudas);
      // console.log('Se inserto en porPagar', this.deudas);<
      // this.storage.guardarDeudas(this.porCobrar, 'pagar');

    } else if (tipo === 'Cobrar') {
      insertarDeuda.Tipo = 'Cobrar';
      this.deudas.unshift(insertarDeuda);
      this.deudasListener.emit(this.deudas);
      // console.log('Se inserto en porCobrar', this.deudas);
      // this.storage.guardarDeudas(this.porCobrar, 'cobrar');

    } else {
      console.log('El tipo no es valido');
      return;
    }

    this.guardarDeudasStorage();
  }

  asignarAvatar(sexo: string) {
    const randomNumber = Math.floor(Math.random() * 8) + 1;

    if (sexo === 'Hombre') {
      return `/assets/personas-icons/hombre/hombre_${randomNumber}.svg`;

   } else if ( sexo === 'Mujer') {

      return `/assets/personas-icons/mujeres/mujer_${randomNumber}.svg`;

   } else if (sexo === 'Otro') {

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

    if (index !== -1) {
        this.deudas.splice(index, 1);
        this.deudasListener.emit(this.deudas);
        this.guardarDeudasStorage();
      } else {
        console.log('Error al querer eliminar la deuda');
      }
  }

  completarDeuda(deuda: Deuda) {

    if (deuda.Tipo === 'Pagar') {
    this.billeteraService.sumarGasto(deuda.Monto);
    console.log('Reste a mi billetera');
    } else if (deuda.Tipo === 'Cobrar') {
    this.billeteraService.sumarMiBilletera(deuda.Monto);
    console.log('Sume a mi billetera');
    } else {
      console.error('[ERROR] El tipo de deuda no era correcto (Contexto: DEUDA SERVICE).');
    }

    deuda.Completada = true;
    deuda.FechaCompletado = moment().locale('es').format('L');
    this.guardarDeudasStorage();
    this.deudasListener.emit(this.deudas);
  }

  setDeuda(nombre: string, monto: number, sexo: string) {

    const setearDeuda: Deuda = {
      Tipo: 'Pagar',
      id: uuid(),
      Nombre: nombre,
      Sexo: this.asignarSexo(sexo),
      Monto: monto,
      FechaCreada: moment().locale('es').format('L'),
      Completada: false,
      FechaCompletado: false,
      AvatarPath: this.asignarAvatar(sexo),
    };
    return setearDeuda;
  }

  asignarSexo(sexo) {
    return sexo;
  }

  getDeudas() {
    this.deudasListener.emit(this.deudas);
  }

  randomColorAvatar() {
    const randomNumber = Math.floor(Math.random() * 4);
    const colores = ['rojo', 'verde', 'turquesa', 'rosa', 'fucsia'];
    return colores[randomNumber];
  }

  buscarDeuda(idDeuda: string): Deuda {
    const deuda = this.deudas.find( elemento => elemento.id === idDeuda);

    if (deuda) {
      return deuda;
    } else {
      console.error('[ERROR] No existe ninguna deuda con el id ingresado.');
    }

  }

}
