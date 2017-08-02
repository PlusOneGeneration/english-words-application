import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from "./menu.component";
import {SettingsComponent} from "./settings/settings.component";
import {CategoriesComponent} from "./categories/categories.component";
import {BookmarksComponent} from "./bookmarks/bookmarks.component";
import {FormsModule} from "@angular/forms";
import {WordSettingsComponent} from "./word-settings/word-settings.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MenuComponent,
    SettingsComponent,
    CategoriesComponent,
    BookmarksComponent,
    WordSettingsComponent
  ],
  exports: [
    MenuComponent,
    WordSettingsComponent
  ]
})
export class MenuModule { }
