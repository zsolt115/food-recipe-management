import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IngredientsListService } from '../recipes/ingredients-list/ingredients-list.service';

@Component({
  selector: 'app-create-new-recipe',
  templateUrl: './create-new-recipe.component.html',
  styleUrls: ['./create-new-recipe.component.css']
})
export class CreateNewRecipeComponent implements OnInit {
  user$ = this.authService.userStatus$;

  @ViewChild('recipeName') recipeNameInputRef: ElementRef;
  @ViewChild('recipeDescription') recipeDescriptionInputRef: ElementRef;
  @ViewChild('recipeImagePath') recipeImagePathInputRef: ElementRef;

  createRecipeForm: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private ingredientsListService: IngredientsListService,
    private http: HttpClient,
    private fb: FormBuilder) {
      this.createForm();
    }

  createForm() {
    this.createRecipeForm = this.fb.group({
      recipeName: ['', Validators.required],
      recipeDescription: ['', Validators.required],
      recipeImage: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }


  onCreatePostRecipes() {
    const recipeName = this.recipeNameInputRef.nativeElement.value;

    const recipeDescription = this.recipeDescriptionInputRef.nativeElement.value;

    const recipeImage = this.recipeImagePathInputRef.nativeElement.value;
    
    const recipeIngredients = this.ingredientsListService.getIngredients();

    const postData = {
      recipeName,
      recipeDescription,
      recipeImage,
      recipeIngredients
    }

    if (postData && postData.recipeName && postData.recipeDescription && postData.recipeImage && postData.recipeIngredients) {
      this.http
      .post(
        'https://ace-food-recipe-management-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        postData
      )
      .subscribe(
        response => response
      );
    } else {
      throw new Error('not implemented');
    }
  }
}
