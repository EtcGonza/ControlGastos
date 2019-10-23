import { Injectable, EventEmitter } from '@angular/core';
import { Billetera } from '../Models/billeteraInterface';

@Injectable({
  providedIn: 'root'
})
export class MiBilleteraService {

  private miBilletera = 0; // Corresponde al dinero actual que tengo.
  private gastado = 0;     // Corresponde al dinero que gaste.
  private sueldo = 0;      // Corresponde al dinero con el que empece el mes.
  private objBilletera: Billetera;
  public billeteraListener = new EventEmitter <Billetera> ();

  constructor() {}

  // Funcion para agregar el sueldo iniciar del mes.
  iniciarSueldo(monto: number) {
  this.sueldo = monto;
  this.miBilletera = monto;
  this.actualizarBilletera();
  this.billeteraListener.emit(this.objBilletera);
  }

  sumarGasto(monto: number) {
  this.gastado = this.gastado + monto;
  this.miBilletera = this.miBilletera - monto;
  this.actualizarBilletera();
  this.billeteraListener.emit(this.objBilletera);
  }

  sumarMiBilletera(monto: number) {
  this.miBilletera = this.miBilletera + monto;
  this.actualizarBilletera();
  this.billeteraListener.emit(this.objBilletera);
  }

  actualizarBilletera() {
    this.objBilletera.Gastado = this.gastado;
    this.objBilletera.MiBilletera = this.miBilletera;
    this.objBilletera.Sueldo = this.sueldo;
  }
}
