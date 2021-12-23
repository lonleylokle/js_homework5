import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { BasketListComponent } from './basket-list/basket-list.component';
import { BasketEditComponent } from './basket-list/basket-edit/basket-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { BasketListService } from './basket-list/basket-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeDefaultComponent } from './recipes/recipe-default/recipe-default.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './recipes/recipe.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    BasketListComponent,
    BasketEditComponent,
    DropdownDirective,
    RecipeDefaultComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BasketListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
