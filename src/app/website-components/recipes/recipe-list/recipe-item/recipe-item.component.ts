import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EditDialogComponent } from '../../../edit-dialog/edit-dialog.component';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../../services/recipe.service';
import { RecipeListComponent } from '../recipe-list.component';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  providers: [EditDialogComponent]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;  // @Input decorator
  @Output() recipeSelected = new EventEmitter<void>();

  user$ = this.authService.userStatus$;
  
  constructor(
    private recipeService: RecipeService, 
    private authService: AuthenticationService, 
    private http: HttpClient, 
    private recipeListComponent: RecipeListComponent,
    private editDialogComponent: EditDialogComponent
  ) { }

  ngOnInit(): void {}

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  onDelete(recipe) {
    this.http
      .delete(`https://ace-food-recipe-management-default-rtdb.europe-west1.firebasedatabase.app/recipes/${recipe.id}.json`, { })
      .subscribe(() => this.recipeListComponent.ngOnInit());
  }

  onUpdate(recipe) {
    this.editDialogComponent.openDialog(recipe);
  }
}
