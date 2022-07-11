import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is just a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459396-960-720.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
