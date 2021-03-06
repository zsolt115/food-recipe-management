import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/website-components/recipes/ingredients.model';
import { IngredientsListService } from './ingredients-list.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']

})
export class IngredientsListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private ingredientListService: IngredientsListService) { }

  ngOnInit(): void {
    this.ingredients = this.ingredientListService.getIngredients();

    this.ingredientListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
    });
  }

  onDeleteItem(ingredientToDelete: Ingredient) {
    this.ingredientListService.onDeleteIngredient(ingredientToDelete);
  }

  // ngOnDestroy() {
  //   this.ingredientListService.ingredientsChanged.unsubscribe();
  // }
}
