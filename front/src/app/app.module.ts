import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'

import {AppComponent} from './app.component';
import {WordsModule} from "./words/words.module";
import {AppRoutingModule} from "./app-routing.module";
import {ResourceModule} from "ng2-resource-rest";

@NgModule({
    declarations: [
        AppComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ResourceModule.forRoot(),
        WordsModule,
        AppRoutingModule,
        InfiniteScrollModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
