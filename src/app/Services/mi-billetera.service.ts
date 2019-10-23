import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiBilleteraService {

  private miBilletera = 0; // Corresponde al dinero actual que tengo.
  private gastado = 0;     // Corresponde al dinero que gaste.
  private sueldo = 0;      // Corresponde al dinero con el que empece el mes.

  constructor() {}

  // Funcion para agregar el sueldo iniciar del mes.
  iniciarSueldo(monto: number) {
  this.sueldo = monto;
  this.miBilletera = monto;
  }

  sumarGasto(monto: number) {
  this.gastado = this.gastado + monto;
  this.miBilletera = this.miBilletera - monto;
  }

  sumarMiBilletera(monto: number) {
  this.miBilletera = this.miBilletera + monto;
  }
}
