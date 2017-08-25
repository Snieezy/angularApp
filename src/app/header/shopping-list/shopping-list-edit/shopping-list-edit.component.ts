import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { Subject } from "rxjs/Subject";
import { NgForm } from "@angular/forms";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private shopListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(form: NgForm) {
    let ingredient = new Ingredient(form.value.name, form.value.amount);
    this.shopListService.addIngredient(ingredient);
  }
}
