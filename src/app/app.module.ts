import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';

import { HomePageComponent } from './website-components/home-page/home-page.component';
import { RecipeListComponent } from './website-components/recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './website-components/recipes/recipes.component';
import { RecipeDetailComponent } from './website-components/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './website-components/recipes/recipe-list/recipe-item/recipe-item.component';
import { CreateNewRecipeComponent } from './website-components/create-new-recipe/create-new-recipe.component';

import { AppRoutingModule } from './app-routing.module';
import { LSideBarComponent } from './layout/l-side-bar/l-side-bar.component';
import { TermsOfServiceComponent } from './misc/terms-of-service/terms-of-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    RecipeListComponent,
    HomePageComponent,
    CreateNewRecipeComponent,
    LSideBarComponent,
    TermsOfServiceComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
