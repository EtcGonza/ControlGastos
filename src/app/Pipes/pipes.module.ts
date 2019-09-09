import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsCategoriaPipe } from './icons-categoria.pipe';



@NgModule({
  declarations: [
    IconsCategoriaPipe
  ],
  exports: [
    IconsCategoriaPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
