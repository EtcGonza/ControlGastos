import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsCategoriaPipe } from './icons-categoria.pipe';
import { MomentPipePipe } from './moment-pipe.pipe';
import { DeudasTipoPipe } from './deudas-tipo.pipe';

@NgModule({
  declarations: [
    IconsCategoriaPipe,
    MomentPipePipe,
    DeudasTipoPipe
  ],
  exports: [
    IconsCategoriaPipe,
    MomentPipePipe,
    DeudasTipoPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
