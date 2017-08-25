import { Ingredient } from "../shared/ingredient.model";
import { OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService implements OnInit, OnDestroy {

    private ingredients: Ingredient[];
    ingredientSubject:Subject<Ingredient[]> = new Subject<Ingredient[]>();
    
    constructor() {
        this.ingredients = [
            new Ingredient('Apples', 5),
            new Ingredient('Tomatoes', 10),
            new Ingredient('Potatoes', 2)
          ];
    }
    ngOnInit() {

    }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        let index = this.ingredients.findIndex((arrIngredient) => arrIngredient.name === ingredient.name)
        if(index > 0) {
            this.ingredients[index].amount += ingredient.amount;
        } else {
            this.ingredients.push(ingredient);
        }
        this.ingredientSubject.next(this.ingredients);
    }

    addIngredientsFromRecipe(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
    }

    ngOnDestroy() {
        this.ingredientSubject.unsubscribe();
    }
}