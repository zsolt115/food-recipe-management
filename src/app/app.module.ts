import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { RecipeListComponent } from './website-components/recipe-list/recipe-list.component';
import { HomePageComponent } from './website-components/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateNewRecipeComponent } from './website-components/create-new-recipe/create-new-recipe.component';
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
    TermsOfServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
