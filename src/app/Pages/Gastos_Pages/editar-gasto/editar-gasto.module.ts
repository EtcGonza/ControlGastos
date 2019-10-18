import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditarGastoPage } from './editar-gasto.page';
import { ComponentsModule } from '../../../Components/components.module';

const routes: Routes = [
  {
    path: '',
    component: EditarGastoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditarGastoPage]
})
export class EditarGastoPageModule {}
