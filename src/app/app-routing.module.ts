import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';

import { HomePageComponent } from './website-components/home-page/home-page.component';
import { RecipeListComponent } from './website-components/recipes/recipe-list/recipe-list.component';
import { CreateNewRecipeComponent } from './website-components/create-new-recipe/create-new-recipe.component';
import { RecipesComponent } from './website-components/recipes/recipes.component';

import { TermsOfServiceComponent } from './misc/terms-of-service/terms-of-service.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home-page', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home-page', component: HomePageComponent },
    { path: 'recipe-list', component: RecipeListComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'new-recipe', component: CreateNewRecipeComponent },
    { path: 'terms-of-service', component: TermsOfServiceComponent },
    { path: "**", redirectTo: 'home-page'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}