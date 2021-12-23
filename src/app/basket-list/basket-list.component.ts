import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { BasketListService } from './basket-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.css']
})
export class BasketListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private slService: BasketListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.emit(index);
  }
}
