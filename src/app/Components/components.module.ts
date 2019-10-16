// Modulos
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Componentes
import { CommonModule } from '@angular/common';
import { PresentacionCardsComponent } from './Home_Components/presentacion-cards/presentacion-cards.component';
import { HeaderComponent } from './Generales/header/header.component';
import { MenuComponent } from './Generales/menu/menu.component';
import { CardDeudaComponent } from './Deuda_Components/card-deuda/card-deuda.component';
import { ModalIconGastosPage } from '../Pages/Gastos_Pages/modal-icon-gastos/modal-icon-gastos.page';
import { IconsSlidesComponent } from './Gastos_Components/icons-slides/icons-slides.component';
import { TuBilleteraComponent } from './Home_Components/tu-billetera/tu-billetera.component';
import { CardGastadoComponent } from './Home_Components/card-gastado/card-gastado.component';
import { CardSueldoComponent } from './Home_Components/card-sueldo/card-sueldo.component';
import { ActividadesComponent } from './Home_Components/actividades/actividades.component';
import { AvatarComponent } from './Deuda_Components/avatar/avatar.component';

// Pipes
import { PipesModule } from 'src/app/Pipes/pipes.module';
import { CardGastoComponent } from './Gastos_Components/card-gasto/card-gasto.component';
import { ImageGastoComponent } from './Gastos_Components/image-gasto/image-gasto.component';


@NgModule({
  declarations: [
    PresentacionCardsComponent,
    HeaderComponent,
    MenuComponent,
    CardDeudaComponent,
    ModalIconGastosPage,
    IconsSlidesComponent,
    TuBilleteraComponent,
    CardGastadoComponent,
    CardSueldoComponent,
    ActividadesComponent,
    AvatarComponent,
    CardGastoComponent,
    ImageGastoComponent,

  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PresentacionCardsComponent,
    IconsSlidesComponent,
    ActividadesComponent,
    CardDeudaComponent,
    CardGastoComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    ModalIconGastosPage
  ]
})
export class ComponentsModule { }
