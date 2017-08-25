import { NgModule } from "@angular/core";
import { RecipeComponent } from "./header/recipe/recipe.component";
import { ShoppingListComponent } from "./header/shopping-list/shopping-list.component";
import { Routes, RouterModule } from "@angular/router";
import { RecipeDetailComponent } from "./header/recipe/recipe-detail/recipe-detail.component";
import { RecipeDefaultComponent } from "./header/recipe/recipe-default/recipe-default.component";
import { RecipeEditComponent } from "./header/recipe/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeComponent, children: [
    {path: '', component: RecipeDefaultComponent },
    {path: 'new', component: RecipeEditComponent },
    {path: ':id/details', component: RecipeDetailComponent },
    {path: ':id/edit', component: RecipeEditComponent },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent }
];


@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
}) 

export class AppRoutingModule {

}