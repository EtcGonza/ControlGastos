import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditarDeudaPage } from './editar-deuda.page';
import { ComponentsModule } from '../../../Components/components.module';

const routes: Routes = [
  {
    path: '',
    component: EditarDeudaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditarDeudaPage]
})
export class EditarDeudaPageModule {}
