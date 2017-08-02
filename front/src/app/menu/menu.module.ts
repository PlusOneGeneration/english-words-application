import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from "./menu.component";
import {SettingsComponent} from "./settings/settings.component";
import {CategoriesComponent} from "./categories/categories.component";
import {BookmarksComponent} from "./bookmarks/bookmarks.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MenuComponent,
    SettingsComponent,
    CategoriesComponent,
    BookmarksComponent
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
