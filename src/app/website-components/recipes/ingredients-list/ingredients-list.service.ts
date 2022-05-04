import { EventEmitter } from "@angular/core";
import { Ingredient } from "src/app/website-components/recipes/ingredients.model";

export class IngredientsListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    
    private ingredients: Ingredient[] = [];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        if (ingredient.amount > 0) {
            this.ingredients.push(ingredient);

            this.ingredientsChanged.emit(this.ingredients.slice());
        }
    }

    onDeleteIngredient(ingredientToDelete: Ingredient) {   
        this.ingredients = this.ingredients.filter((ingredient) => ingredient !== ingredientToDelete);

        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}