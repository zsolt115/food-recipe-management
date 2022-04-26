import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/website-components/recipes/ingredients.model';
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
  
  noValue: boolean;
  
  constructor(private ingredientListService: IngredientsListService) {}

  ngOnInit(): void {}

  onAddItem() {
    this.noValue = false;
    
    const ingredientName = this.nameInputRef.nativeElement.value;

    const ingredientAmount = this.amountInputRef.nativeElement.value;

    const ingredientUnit = this.unitInputRef.nativeElement.value;

    if (!ingredientName || !ingredientAmount) {
      this.noValue = true;

      return;
    }

    const newIngredient = new Ingredient(ingredientName, ingredientAmount, ingredientUnit);

    this.ingredientListService.addIngredient(newIngredient);
  }
}
