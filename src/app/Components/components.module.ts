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

// Pipes
import { SinCompletarPipe } from '../Pipes/sin-completar.pipe';

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
    SinCompletarPipe
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PresentacionCardsComponent,
    PresentacionDeudasComponent,
    CrearDeudaComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ComponentsModule { }
