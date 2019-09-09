import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GastosPage } from './gastos.page';
import { ComponentsModule } from '../../Components/components.module';

const routes: Routes = [
  {
    path: '',
    component: GastosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GastosPage]
})
export class GastosPageModule {}
