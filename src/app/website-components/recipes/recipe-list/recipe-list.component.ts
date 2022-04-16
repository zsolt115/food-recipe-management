import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter } from '@angular/core';
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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  onCreateGetRecipes() {
    return this.http.get('https://ace-food-recipe-management-default-rtdb.europe-west1.firebasedatabase.app/posts.json').subscribe(data => console.log(data));
  }
}
