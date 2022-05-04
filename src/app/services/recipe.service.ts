import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../website-components/recipes/recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private http: HttpClient) {}

    getRecipes(): Observable<Recipe[]> {
        return this.http.get<Recipe[]>('https://ace-food-recipe-management-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', {});
    }
}