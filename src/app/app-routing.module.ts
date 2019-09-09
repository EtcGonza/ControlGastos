import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'lista-deudas', loadChildren: './Pages/lista-deudas/lista-deudas.module#ListaDeudasPageModule' },
  { path: 'nueva-deuda', loadChildren: './Pages/nueva-deuda/nueva-deuda.module#NuevaDeudaPageModule' },
  { path: 'gastos', loadChildren: './Pages/gastos/gastos.module#GastosPageModule' },
  { path: 'nuevo-gasto', loadChildren: './Pages/nuevo-gasto/nuevo-gasto.module#NuevoGastoPageModule' },
  { path: 'modal-icon-gastos', loadChildren: './Pages/General_Pages/modal-icon-gastos/modal-icon-gastos.module#ModalIconGastosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
