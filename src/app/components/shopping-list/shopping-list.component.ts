import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: [],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    { name: 'apples', amount: 5 },
    { name: 'tomatoes', amount: 10 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
