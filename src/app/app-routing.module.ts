import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* const routes: Routes = [
  { path: 'account', loadChildren: () => import('./search-page/search-page').then(m => m.SearchComponent) },
  { path: '', redirectTo: 'account', pathMatch: 'full' },
]; */

const routes: Routes = [
  { path: '', loadComponent: () => import('./search-page/search-page').then(m => m.SearchComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
