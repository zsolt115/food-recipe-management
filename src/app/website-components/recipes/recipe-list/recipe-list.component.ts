import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  theSelectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[];

  constructor(private recipeService: RecipeService, private http: HttpClient) {}

  ngOnInit() {
    this.onGetRecipeList();
  }

  onGetRecipeList() {
    this.http
      .get('https://ace-food-recipe-management-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', {})
      .subscribe((res: Recipe[]) => {
        this.recipes = res;

        const keys = Object.keys(res);

        this.recipes = keys.map((key) => {
          res[key].id = key;
          return res[key];
        });
    });
  }
}
