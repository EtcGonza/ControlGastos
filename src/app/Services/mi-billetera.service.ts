import { Injectable, EventEmitter } from '@angular/core';
import { Billetera } from '../Models/billeteraInterface';

@Injectable({
  providedIn: 'root'
})
export class MiBilleteraService {

  miBilletera = 15000;  // Corresponde al dinero actual que tengo.
  gastado = 2000;       // Corresponde al dinero que gaste.
  sueldo = 20000;       // Corresponde al dinero con el que empece el mes.
  // objBilletera: Billetera = {
  //   MiBilletera: 2222,
  //   Gastado: 1111,
  //   Sueldo: 150
  // };

  objBilleteraListener = new EventEmitter <Billetera> ();
  billeteraListener = new EventEmitter <number> ();
  sueldoListener = new EventEmitter <number> ();
  gastadoListener = new EventEmitter <number> ();

  constructor() {
    this.actualizarBilletera();
    this.emitirBilletera();
  }

  // Funcion para agregar el sueldo iniciar del mes.
  iniciarSueldo(monto: number) {
  this.sueldo = monto;
  this.miBilletera = monto;
  this.actualizarBilletera();
  this.emitirSueldo();
  this.emitirBilletera();
  }

  sumarGasto(monto: number) {
  this.gastado = this.gastado + monto;
  this.miBilletera = this.miBilletera - monto;
  console.log('SumarGasto Llamado');
  this.actualizarBilletera();
  this.emitirGastado();
  this.emitirBilletera();
  }

  sumarMiBilletera(monto: number) {
  this.miBilletera = this.miBilletera + monto;
  this.actualizarBilletera();
  this.emitirBilletera();
  }

  actualizarBilletera() {
    // this.objBilletera.Gastado = this.gastado;
    // this.objBilletera.MiBilletera = this.miBilletera;
    // this.objBilletera.Sueldo = this.sueldo;
  }

  emitirSueldo() {
    this.sueldoListener.emit(this.sueldo);
  }
  emitirBilletera() {
    this.billeteraListener.emit(this.miBilletera);
  }
  emitirGastado() {
    this.gastadoListener.emit(this.gastado);
  }

  getGastado() {
    return this.gastado;
  }

  getSueldo() {
    return this.sueldo;
  }

  getBilletera() {
    return this.miBilletera;
  }
}
