import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './header/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeComponent } from './header/recipe/recipe.component';
import { RecipeListComponent } from './header/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './header/recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './header/recipe/recipe-detail/recipe-detail.component';
import { DropdownDirective } from './header/shared/dropdown.directive';
import { ShoppingListService } from "./header/shopping-list/shopping-list.service";
import { AppRoutingModule } from "./app-routing.module";
import { RecipeEditComponent } from './header/recipe/recipe-edit/recipe-edit.component';
import { RecipeDefaultComponent } from './header/recipe/recipe-default/recipe-default.component';
import { RecipeService } from "./header/recipe/recipe.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirective,
    RecipeEditComponent,
    RecipeDefaultComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
