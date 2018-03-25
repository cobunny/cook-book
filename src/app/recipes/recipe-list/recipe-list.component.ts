import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasClicked = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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
  constructor() {}

  ngOnInit() {}

  onRecipeClicked(recipe: Recipe) {
    this.recipeWasClicked.emit(recipe);
  }
}
