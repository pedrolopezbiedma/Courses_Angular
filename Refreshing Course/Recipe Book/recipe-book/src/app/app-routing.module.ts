// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components, Services & Models
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { NoSelectedRecipeComponent } from './recipe-book/no-selected-recipe/no-selected-recipe.component';
import { RecipeDetailsComponent } from './recipe-book/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';
import { AuthGuard } from './authentication/authentication/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/recipe-book', pathMatch: 'full' },
  { path: 'recipe-book', component: RecipeBookComponent, canActivate: [AuthGuard], children: [
    { path: '', component: NoSelectedRecipeComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':recipeId', component: RecipeDetailsComponent },
    { path: ':recipeId/edit', component: RecipeEditComponent },
  ]},
  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] },
  { path: 'authentication', component: AuthenticationComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
