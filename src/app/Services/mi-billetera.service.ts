import { Injectable, EventEmitter } from '@angular/core';
import { Billetera } from '../Models/billeteraInterface';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class MiBilleteraService {

  miBilletera = 0;   // Corresponde al dinero actual que tengo.
  gastado = 0;       // Corresponde al dinero que gaste.
  sueldo = 0;        // Corresponde al dinero con el que empece el mes.
  objBilletera: Billetera = {
    MiBilletera: 0,
    Gastado: 0,
    Sueldo: 0
  };

  objBilleteraListener = new EventEmitter <Billetera> ();
  billeteraListener = new EventEmitter <number> ();
  sueldoListener = new EventEmitter <number> ();
  gastadoListener = new EventEmitter <number> ();

  constructor(private storage: Storage) {
    this.cargarGastosStorage();
    // this.actualizarBilletera();
    // this.emitirBilletera();
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
    this.objBilletera.Gastado = this.gastado;
    this.objBilletera.MiBilletera = this.miBilletera;
    this.objBilletera.Sueldo = this.sueldo;
    this.guardarStorage();
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

  guardarStorage() {
    this.storage.set('billetera', this.objBilletera);
    console.log('Se guardo la billetera en el storage');
  }

  async cargarGastosStorage() {
    const miBilletera = await this.storage.get('billetera');

    if (miBilletera) {
      this.objBilletera = miBilletera;
      console.log('Se cargo una billetera del storage');
    } else {
      console.log('No existen billetera en el storage');
      this.miBilletera = null;
    }

    this.setearEstadoBilletera();

  }

  setearEstadoBilletera() {

    if (this.objBilletera) {
      this.sueldo = this.objBilletera.Sueldo;
      this.miBilletera = this.objBilletera.MiBilletera;
      this.gastado = this.objBilletera.Gastado;
    } else {
      this.objBilletera = {
        MiBilletera: 0,
        Gastado: 0,
        Sueldo: 0
      };
    }

    this.emitirBilletera();
    this.emitirGastado();
    this.emitirSueldo();
  }
}
