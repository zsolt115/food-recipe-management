import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './authentication/login/login.component';
import { HomePageComponent } from './website-components/home-page/home-page.component';
import { RecipeListComponent } from './website-components/recipe-list/recipe-list.component';

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