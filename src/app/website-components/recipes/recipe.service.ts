import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/ingredients.model';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'A test recipe1',
    //         'This is the description',
    //         'https://www.thespruceeats.com/thmb/cO72JFFH0TCAufENSxUfqE8TmKw=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg',
    //         [
    //             new Ingredient('ing1', 2, 'unit1'),
    //             new Ingredient('ing2', 5, 'unit2')
    //         ]
    //         ),
        // new Recipe(
        //     'A test recipe2',
        //     'This is the description2',
        //     'https://www.thespruceeats.com/thmb/cO72JFFH0TCAufENSxUfqE8TmKw=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg',
        //     [
        //         new Ingredient('Cheese', 2, 'slices'),
        //         new Ingredient('Bread', 2, 'slices')
        //     ]
        //     )
    // ];

    private recipes: Recipe[];

    constructor() {}

    getRecipes() {
        return this.recipes.slice();
    }
}