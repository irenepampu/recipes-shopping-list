import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared features/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Fried salmon',
      'A healthy salmon recipe',
      'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg',
      [new Ingredient('meat', 1), new Ingredient('fries', 20)]
    ),
    new Recipe(
      'French fries',
      'Cheesy fries with parmesan and onion',
      'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_1280.jpg',
      [
        new Ingredient('potatoes', 4),
        new Ingredient('onion', 1),
        new Ingredient('cheese', 1),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
