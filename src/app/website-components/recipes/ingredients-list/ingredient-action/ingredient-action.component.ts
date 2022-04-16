import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/ingredients.model';
import { IngredientsListService } from '../ingredients-list.service';

@Component({
  selector: 'app-ingredient-action',
  templateUrl: './ingredient-action.component.html',
  styleUrls: ['./ingredient-action.component.css']
})
export class IngredientActionComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('unitInput') unitInputRef: ElementRef;

  constructor(private ingredientListService: IngredientsListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingredientName = this.nameInputRef.nativeElement.value;

    const ingredientAmount = this.amountInputRef.nativeElement.value;

    const ingredientUnit = this.unitInputRef.nativeElement.value;

    const newIngredient = new Ingredient(ingredientName, ingredientAmount, ingredientUnit);

    this.ingredientListService.addIngredient(newIngredient);
  }
}
