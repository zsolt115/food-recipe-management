import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import * as firebase from 'firebase/compat';
import { Observable } from 'rxjs/internal/Observable';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;  // @Input decorator
  @Output() recipeSelected = new EventEmitter<void>();

  user$ = this.authService.userStatus$;
  
  constructor(private recipeService: RecipeService, private authService: AuthenticationService, private http: HttpClient) { }

  ngOnInit(): void {}

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  onDelete() {
    this.http.delete(`https://ace-food-recipe-management-default-rtdb.europe-west1.firebasedatabase.app/recipes/${this.recipe.id}.json`, { }).subscribe((res) => console.log(res));
  }
}
