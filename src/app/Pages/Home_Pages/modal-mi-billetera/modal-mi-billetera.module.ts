import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalMiBilleteraPage } from './modal-mi-billetera.page';
import { ComponentsModule } from '../../../Components/components.module';

const routes: Routes = [
  {
    path: '',
    component: ModalMiBilleteraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [ModalMiBilleteraPage],
  exports: [ModalMiBilleteraPage],
  declarations: [ModalMiBilleteraPage]
})
export class ModalMiBilleteraPageModule {}
