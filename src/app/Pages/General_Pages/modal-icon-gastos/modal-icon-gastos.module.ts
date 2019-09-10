import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalIconGastosPage } from './modal-icon-gastos.page';
import { ComponentsModule } from '../../../Components/components.module';
import { PipesModule } from '../../../Pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: ModalIconGastosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    PipesModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  declarations: [ModalIconGastosPage],
})
export class ModalIconGastosPageModule {}
