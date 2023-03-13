// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/recipe-book', pathMatch: 'full' },
  { path: 'recipe-book', loadChildren: () => import('./recipe-book/recipe-book.module').then(module => module.RecipeBookModule)},
  { path: 'authentication', loadChildren: () => import('./authentication/authentication/authentication.module').then(module => module.AuthenticationModule)},
  { path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module').then(module => module.ShoppingListModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
