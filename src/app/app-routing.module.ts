import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

const appRoutes: Routes = [
    // each object represents a route
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home-page', component: HomePageComponent },
    { path: 'recipe-list', component: RecipeListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}