import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details-ingredients',
  templateUrl: './recipe-details-ingredients.component.html',
  styleUrls: ['./recipe-details-ingredients.component.css']
})
export class RecipeDetailsIngredientsComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
