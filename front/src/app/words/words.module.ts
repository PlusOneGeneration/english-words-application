import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InfiniteScrollModule} from 'ngx-infinite-scroll'

import {WordsRoutingModule} from './words-routing.module';
import {WordComponent} from './word/word.component';
import {WordsResource} from "./words.resource";
import {WordListComponent} from './word-list/word-list.component';
import {WordsService} from "./words.service";
import {StorageService} from "../local-storage.service";
import { WordSettingsComponent } from './word-settings/word-settings.component';
import {MenuService} from "../menu/menu.service";
import {UiModule} from "../ui/ui.module";
import {MenuModule} from "../menu/menu.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        WordsRoutingModule,
        InfiniteScrollModule,
        UiModule,
        MenuModule
    ],
    providers: [
        WordsResource,
        WordsService,
        StorageService,
        MenuService
    ],
    declarations: [
        WordComponent,
        WordListComponent,
        WordSettingsComponent
]
})

export class WordsModule {
}
