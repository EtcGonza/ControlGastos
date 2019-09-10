import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsCategoriaPipe } from './icons-categoria.pipe';
import { MomentPipePipe } from './moment-pipe.pipe';

@NgModule({
  declarations: [
    IconsCategoriaPipe,
    MomentPipePipe
  ],
  exports: [
    IconsCategoriaPipe,
    MomentPipePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
