import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Deuda } from '../Models/deudaInterface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {}

  guardarDeudas(deudas: Deuda [], tipo: string) {

    // if (tipo === 'cobrar') {
      this.storage.set('cobrar', deudas);
      console.log('Cobrar Guardadas');
    // } else if (tipo === 'pagar') {
    //   this.storage.set('pagar', deudas);
    //   console.log('Pagar Guardadas');
    // }

  }


}
