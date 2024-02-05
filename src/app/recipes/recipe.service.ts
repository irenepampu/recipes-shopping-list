import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'First recipe',
      'This is a description',
      'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg'
    ),
    new Recipe(
      'Second recipe',
      'This is a description',
      'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
