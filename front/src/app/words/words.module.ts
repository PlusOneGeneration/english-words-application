import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InfiniteScrollModule} from 'ngx-infinite-scroll'

import {WordsRoutingModule} from './words-routing.module';
import {WordComponent} from './word/word.component';
import {WordsResource} from "./words.resource";
import {WordListComponent} from './word-list/word-list.component';
import {MenuComponent} from './menu/menu.component';
import {SettingsComponent} from './menu/settings/settings.component';
import {CategoriesComponent} from './menu/categories/categories.component';
import {WordsService} from "./words.service";
import {LocalStorageModule} from "angular-2-local-storage";
import {StorageService} from "./local-storage.service";
import { BookmarksComponent } from './menu/bookmarks/bookmarks.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        WordsRoutingModule,
        InfiniteScrollModule,
        LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
        })
    ],
    providers: [
        WordsResource,
        WordsService,
        StorageService
    ],
    declarations: [
        WordComponent,
        WordListComponent,
        MenuComponent,
        SettingsComponent,
        CategoriesComponent,
        BookmarksComponent
    ]
})

export class WordsModule {
}
