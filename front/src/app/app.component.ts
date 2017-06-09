import { Component } from '@angular/core';
import {WordsQuery} from "./words/word-list/WordsQuery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //
  // query: WordsQuery;
  throttle = '300';
  scrollDistance = '2';
  //
  // constructor(){
  //
  // }
  //
  onScrollDown() {
    console.log('scrolled!!');

    // this.query.skipping += this.query.numberOfWords;


  }

}
