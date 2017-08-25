import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from "./shopping-list.service";
import { Subject } from "rxjs/Subject";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  ingredientsSubject:Subject<Ingredient> = new Subject<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientSubject
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }
}
