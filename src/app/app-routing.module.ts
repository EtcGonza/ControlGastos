import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./Pages/Home_Pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'gastos', loadChildren: './Pages/Gastos_Pages/gastos/gastos.module#GastosPageModule' },
  { path: 'nuevo-gasto', loadChildren: './Pages/Gastos_Pages/nuevo-gasto/nuevo-gasto.module#NuevoGastoPageModule' },
  { path: 'nueva-deuda', loadChildren: './Pages/Deudas_Pages/nueva-deuda/nueva-deuda.module#NuevaDeudaPageModule' },
  { path: 'deudas', loadChildren: './Pages/Deudas_Pages/deudas/deudas.module#DeudasPageModule' },
  { path: 'tabs', loadChildren: './Pages/tabs/tabs.module#TabsPageModule' },
  { path: 'editar-deuda/:idDeuda', loadChildren: './Pages/Deudas_Pages/editar-deuda/editar-deuda.module#EditarDeudaPageModule' },
  { path: 'editar-gasto/:idGasto', loadChildren: './Pages/Gastos_Pages/editar-gasto/editar-gasto.module#EditarGastoPageModule' },
  { path: 'agregar-saldo', loadChildren: './Pages/Home_Pages/agregar-saldo/agregar-saldo.module#AgregarSaldoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
