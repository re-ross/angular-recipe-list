import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: 'A Test Recipe',
      description: 'This is just a test',
      imagePath:
        'https://c.pxhere.com/images/22/4a/6321d069b3386c120e0c860dc56a-1620832.jpg!d',
    },
    {
      name: 'Another Test Recipe',
      description: 'This is just another test',
      imagePath:
        'https://c.pxhere.com/images/22/4a/6321d069b3386c120e0c860dc56a-1620832.jpg!d',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
