import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WordListComponent} from "./word-list/word-list.component";

export  const wordRoutes: Routes = [
  {
    path: 'words',
    component: WordListComponent,
  }
];

@NgModule({
  exports: [RouterModule],
})
export class WordsRoutingModule { }
