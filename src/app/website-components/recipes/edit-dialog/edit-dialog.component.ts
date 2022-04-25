import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css'],
  providers: [RecipeListComponent]
})
export class EditDialogComponent implements OnInit {
  recipeForm: FormGroup;
  
  recipe: Recipe;

  recipeName: string;
  recipeDescription: string;
  recipeImage: string;
  recipeIngredients = new FormArray([]);

  constructor(
    private router: Router,
    private dialog: MatDialog, 
    private fb: FormBuilder, 
    private dialogRef: MatDialogRef<EditDialogComponent>,
    private recipeListComponent: RecipeListComponent,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.recipe = data;
  }

  ngOnInit(): void {
    this.onCreateRecipeForm();
  }

  addIngredient() {
    (<FormArray>this.recipeForm.get('recipeIngredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, Validators.required),
        'unit': new FormControl()
      })
    );
  }

  deleteIngredient(deleteIngredient) {
    (<FormArray>this.recipeForm.get('recipeIngredients')).removeAt(deleteIngredient);
  }

  onCreateRecipeForm() {
    if (this.recipe['recipeIngredients']) {
      for (let ingredient of this.recipe.recipeIngredients) {
        this.recipeIngredients.push(
          new FormGroup({
            'name': new FormControl(ingredient.name),
            'amount': new FormControl(ingredient.amount),
            'unit': new FormControl(ingredient.unit)
          })
        )
      }
    }

    return this.recipeForm = this.fb.group({
      'recipeName': [this.recipe.recipeName, [Validators.required]],
      'recipeDescription': [this.recipe.recipeDescription, [Validators.required]],
      'recipeImage': [this.recipe.recipeImage, [Validators.required]],
      'recipeIngredients': this.recipeIngredients
    });
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('recipeIngredients')).controls;
  }

  save() {
    this.dialogRef.close(this.recipeForm.value);
    
  }

  close() {
    this.dialogRef.close();
  }

  openDialog(recipe) {
    this.recipe = recipe;

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.height = '800px';
    dialogConfig.width = '1024px';

    dialogConfig.data = recipe;

    const dialogRef = this.dialog.open(EditDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (!data) return;

        this.http
          .put(`https://ace-food-recipe-management-default-rtdb.europe-west1.firebasedatabase.app/recipes/${recipe.id}.json`, data)
          .subscribe(() => this.recipeListComponent.ngOnInit());
      }
    );
}
}
