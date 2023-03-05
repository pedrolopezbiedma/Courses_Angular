// Angular
import { EventEmitter, Injectable, Output } from '@angular/core';

// Components, Services & Models
import { Recipe } from '../recipe-book/recipe.model';
import { Ingredient } from './ingredient.model';

@Injectable({providedIn: 'root'})
export class RecipesService {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  private recipes:Recipe[] = [
    new Recipe(
      'Test Recipe 1 Name',
      'Test Recipe 1 Description',
      'https://i.blogs.es/173514/croquetas/450_1000.jpeg',
      [new Ingredient('Pan', 5), new Ingredient('Mermelada', 1)]),
    new Recipe(
      'Test Recipe 2 Name',
      'Test Recipe 2 Description',
      'https://i.blogs.es/173514/croquetas/450_1000.jpeg',
      [new Ingredient('Patatas', 5), new Ingredient('Huevo', 1)]
      )
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  onSelectedRecipe(recipe: Recipe): void {
    this.selectedRecipe.emit(recipe);
  }
}