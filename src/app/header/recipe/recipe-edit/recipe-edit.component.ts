import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  recipeToEdit: Recipe;
  
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          if(params['id'] === 0) {
            this.recipeToEdit = new Recipe('', '', '', []);
          } else {
            this.recipe = this.recipeService.getRecipe(+params['id']);
            this.recipeToEdit = Object.assign({}, this.recipe);
          }
        }
      )
  }

  onSaveRecipe() {
    this.recipeService.setRecipe(this.recipeToEdit);
  }
}
