// Modulos
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Componentes
import { CommonModule } from '@angular/common';
import { CardComponent } from './Home_Components/card/card.component';
import { PresentacionCardsComponent } from './Home_Components/presentacion-cards/presentacion-cards.component';
import { HeaderComponent } from './Generales/header/header.component';
import { MenuComponent } from './Generales/menu/menu.component';
import { ListaDeudaComponent } from './Deuda_Components/lista-deuda/lista-deuda.component';
import { CardDeudaComponent } from './Deuda_Components/card-deuda/card-deuda.component';
import { ModalIconGastosPage } from '../Pages/Gastos_Pages/modal-icon-gastos/modal-icon-gastos.page';
import { IconsSlidesComponent } from './Gastos_Components/icons-slides/icons-slides.component';

// Pipes
import { PipesModule } from 'src/app/Pipes/pipes.module';


@NgModule({
  declarations: [
    CardComponent,
    PresentacionCardsComponent,
    HeaderComponent,
    MenuComponent,
    ListaDeudaComponent,
    CardDeudaComponent,
    ModalIconGastosPage,
    IconsSlidesComponent,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PresentacionCardsComponent,
    IconsSlidesComponent,
    ListaDeudaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule,
  ],
  entryComponents:[
    ModalIconGastosPage
  ]
})
export class ComponentsModule { }
