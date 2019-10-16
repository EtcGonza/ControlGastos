import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Deuda } from '../Models/deudaInterface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {}

  guardarDeudasStorage(deudas: Deuda []) {
    this.storage.set('misdeudas', deudas);
    console.log('Se guardaron deudas en el storage');
  }

  async cargarDeudasStorage(deudas: Deuda []) {
    const misDeudas = await this.storage.get('misdeudas');

    if (misDeudas) {
      deudas = misDeudas;
    } else {
      console.log('No existe en el storage Deudas para cargar');
    }
  }

  guardarGastosStorage() {

  }

  cargarGastosStorage() {

  }


}
