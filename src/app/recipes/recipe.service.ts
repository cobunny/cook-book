import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeClicked = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Hot pot',
      'Very spicy',
      'https://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg',
      [new Ingredient('Bread', 2), new Ingredient('Blueberries', 20)]
    ),
    new Recipe(
      'Beef noodles',
      'This is a test recipe',
      'https://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg',
      [new Ingredient('Basils', 4), new Ingredient('Tomatoes', 1)]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
