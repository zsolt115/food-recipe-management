import { EventEmitter } from "@angular/core";
import { Ingredient } from "src/app/ingredients.model";

export class IngredientsListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    
    private ingredients: Ingredient[] = [
        new Ingredient('milk', 200, 'ml'),
        new Ingredient('egg', 2, ''),
        new Ingredient('flour', 450, 'g'),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}