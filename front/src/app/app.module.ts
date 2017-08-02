import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {WordsModule} from "./words/words.module";
import {AppRoutingModule} from "./app-routing.module";
import {ResourceModule} from "ng2-resource-rest";
import {LocalStorageModule} from "angular-2-local-storage";

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
        LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
