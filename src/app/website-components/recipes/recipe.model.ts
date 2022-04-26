import { Ingredient } from "src/app/website-components/recipes/ingredients.model";

export class Recipe {
    public id: string;
    public recipeName: string;
    public recipeDescription: string;
    public recipeImage: string;

    public recipeIngredients: Ingredient[];

    constructor(
        id: string,
        recipeName: string,
        recipeDescription: string,
        recipeImage: string,
        ingredients: Ingredient[]
    ) {
        this.id = id;
        this.recipeName = recipeName;
        this.recipeDescription = recipeDescription;
        this.recipeImage = recipeImage;
        this.recipeIngredients = ingredients;
    }
}