import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'lista-deudas', loadChildren: './Pages/lista-deudas/lista-deudas.module#ListaDeudasPageModule' },
  { path: 'nueva-deuda', loadChildren: './Pages/nueva-deuda/nueva-deuda.module#NuevaDeudaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
