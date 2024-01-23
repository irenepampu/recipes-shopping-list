import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'First recipe',
      'This is a description',
      'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
