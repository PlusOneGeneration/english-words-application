import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {wordRoutes} from "./words/words-routing.module";


const routes: Routes = [
    {path: '', redirectTo: 'app/words', pathMatch: 'full'},
    {
        path: 'app',
        children: [
            ...wordRoutes,
        ]
    },

    {path: '**', redirectTo: 'app/words', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}