import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastCtrl: ToastController) {}

  async crearDeudaToast() {
    const toast = await this.toastCtrl.create({
      message: 'Creaste una deuda',
      duration: 1800,
      animated: true,
      color: 'fucsia',
      position: 'top',
      showCloseButton: false,
      mode: 'ios',
      cssClass: ['textoBlanco', 'centrar-texto', 'toastGrande'],
      buttons: [
        {
          icon: 'book',
          side: 'start'
        }
      ]
    });
    toast.present();
  }

  async borrarDeudaToast() {
    const toast = await this.toastCtrl.create({
      message: 'Borraste una deuda',
      duration: 1800,
      animated: true,
      color: 'rojo',
      position: 'top',
      showCloseButton: false,
      mode: 'ios',
      cssClass: ['textoBlanco', 'centrar-texto', 'toastGrande'],
      buttons: [
        {
          icon: 'trash',
          side: 'start'
        }
      ]
    });
    toast.present();
  }

  async completarDeudaToast() {
    const toast = await this.toastCtrl.create({
      message: '¡Completaste una deuda!',
      duration: 1800,
      animated: true,
      color: 'fucsia',
      position: 'top',
      showCloseButton: false,
      mode: 'ios',
      cssClass: ['textoBlanco', 'centrar-texto', 'toastGrande'],
      buttons: [
        {
          icon: 'checkmark-circle-outline',
          side: 'start'
        }
      ]
    });
    toast.present();
  }

  async editarDeudaToast() {
    const toast = await this.toastCtrl.create({
      message: 'Deuda editada',
      duration: 1800,
      animated: true,
      color: 'fucsia',
      position: 'top',
      showCloseButton: false,
      mode: 'ios',
      cssClass: ['textoBlanco', 'centrar-texto', 'toastChico'],
      buttons: [
        {
          icon: 'create',
          side: 'start'
        }
      ]
    });
    toast.present();
  }

  async nuevoGasto() {
    const toast = await this.toastCtrl.create({
      message: 'Nuevo gasto',
      duration: 1800,
      animated: true,
      color: 'fucsia',
      position: 'top',
      showCloseButton: false,
      mode: 'ios',
      cssClass: ['textoBlanco', 'centrar-texto', 'toastChico'],
      buttons: [
        {
          icon: 'cash',
          side: 'start'
        }
      ]
    });
    toast.present();
  }

  async borrarGasto() {
    const toast = await this.toastCtrl.create({
      message: 'Gasto borrado',
      duration: 1800,
      animated: true,
      color: 'rojo',
      position: 'top',
      showCloseButton: false,
      mode: 'ios',
      cssClass: ['textoBlanco', 'centrar-texto', 'toastChico'],
      buttons: [
        {
          icon: 'trash',
          side: 'start'
        }
      ]
    });
    toast.present();
  }

  async editarGasto() {
    const toast = await this.toastCtrl.create({
      message: 'Editaste un gasto',
      duration: 1800,
      animated: true,
      color: 'fucsia',
      position: 'top',
      showCloseButton: false,
      mode: 'ios',
      cssClass: ['textoBlanco', 'centrar-texto', 'toastChico'],
      buttons: [
        {
          icon: 'create',
          side: 'start'
        }
      ]
    });
    toast.present();
  }

}
