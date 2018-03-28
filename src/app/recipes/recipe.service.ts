import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeClicked = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Hot pot',
      'Very spicy',
      'https://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg'
    ),
    new Recipe(
      'Beef noodles',
      'This is a test recipe',
      'https://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
