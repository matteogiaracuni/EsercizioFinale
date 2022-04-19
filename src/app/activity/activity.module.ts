import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCocktailsComponent } from "./list-cocktails/ListCocktailsComponent";




@NgModule({
  declarations: [
    ListCocktailsComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [ListCocktailsComponent],
})
export class ActivityModule { }
