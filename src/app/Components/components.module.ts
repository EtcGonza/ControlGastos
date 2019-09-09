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
import { PresentacionDeudasComponent } from './Deuda_Components/presentacion-deudas/presentacion-deudas.component';
import { ListaDeudaComponent } from './Deuda_Components/lista-deuda/lista-deuda.component';
import { CrearDeudaComponent } from './Deuda_Components/crear-deuda/crear-deuda.component';
import { CardDeudaComponent } from './Deuda_Components/card-deuda/card-deuda.component';
import { PresentacionGastosComponent } from './Gastos_Components/presentacion-gastos/presentacion-gastos.component';
import { CrearGastoComponent } from './Gastos_Components/crear-gasto/crear-gasto.component';
import { ModalIconGastosPage } from '../Pages/General_Pages/modal-icon-gastos/modal-icon-gastos.page';

// Pipes

@NgModule({
  declarations: [
    CardComponent,
    PresentacionCardsComponent,
    HeaderComponent,
    MenuComponent,
    PresentacionDeudasComponent,
    ListaDeudaComponent,
    CrearDeudaComponent,
    CardDeudaComponent,
    PresentacionGastosComponent,
    CrearGastoComponent,
    ModalIconGastosPage,

  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PresentacionCardsComponent,
    PresentacionDeudasComponent,
    CrearDeudaComponent,
    PresentacionGastosComponent,
    CrearGastoComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents:[
    ModalIconGastosPage
  ]
})
export class ComponentsModule { }
