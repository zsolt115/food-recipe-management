import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';

import { HomePageComponent } from './website-components/home-page/home-page.component';
import { RecipeListComponent } from './website-components/recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './website-components/recipes/recipes.component';
import { RecipeItemComponent } from './website-components/recipes/recipe-list/recipe-item/recipe-item.component';
import { CreateNewRecipeComponent } from './website-components/create-new-recipe/create-new-recipe.component';

import { AppRoutingModule } from './app-routing.module';
import { TermsOfServiceComponent } from './misc/terms-of-service/terms-of-service.component';
import { RecipeDetailsIngredientsComponent } from './website-components/recipes/recipe-details-ingredients/recipe-details-ingredients.component';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotToastModule } from '@ngneat/hot-toast';
import { IngredientsListComponent } from './website-components/recipes/ingredients-list/ingredients-list.component';
import { IngredientsListService } from './website-components/recipes/ingredients-list/ingredients-list.service';
import { IngredientActionComponent } from './website-components/recipes/ingredients-list/ingredient-action/ingredient-action.component';

import { HttpClientModule } from '@angular/common/http';
import { RecipeService } from './website-components/recipes/recipe.service';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { EditDialogComponent } from './website-components/recipes/edit-dialog/edit-dialog.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    RecipeListComponent,
    HomePageComponent,
    CreateNewRecipeComponent,
    TermsOfServiceComponent,
    RecipeItemComponent,
    RecipesComponent,
    RecipeDetailsIngredientsComponent,
    IngredientsListComponent,
    IngredientActionComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot(),
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    IngredientsListService,
    RecipeService,
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    },
    {
      provide: EditDialogComponent,
      useValue: {}
    }
    
  ],
  bootstrap: [AppComponent],
  entryComponents: [EditDialogComponent] // the component to be usable as a dialog body, we need to declare it as an entryComponent
})
export class AppModule { }
