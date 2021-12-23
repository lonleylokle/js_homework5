import { Ingredient } from 'src/app/shared/ingredient.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BasketListService } from '../basket-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basket-edit',
  templateUrl: './basket-edit.component.html',
  styleUrls: ['./basket-edit.component.css']
})
export class BasketEditComponent implements OnInit {
  @ViewChild('f', { static: false }) slForm: NgForm;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: BasketListService) {}

  ngOnInit(): void {
    this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

}
