import { Component, Inject, Injectable, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css'],
})
export class EditDialogComponent implements OnInit {
  form: FormGroup;
  
  recipe: Recipe;

  constructor(
    private dialog: MatDialog, 
    private fb: FormBuilder, 
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.recipe = data;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      recipeName: [this.recipe.recipeName, Validators.required],
      recipeDescription: [this.recipe.recipeDescription, Validators.required],
      recipeImage: [this.recipe.recipeImage, Validators.required],
      recipeIngredients: [this.recipe.recipeIngredients, Validators.required],
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

  openDialog(recipe): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    // console.log(recipe);
    dialogConfig.height = '800px';
    dialogConfig.width = '1024px';

    dialogConfig.data = recipe;

    this.dialog.open(EditDialogComponent, dialogConfig);
    
    const dialogRef = this.dialog.open(EditDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );
}
}
