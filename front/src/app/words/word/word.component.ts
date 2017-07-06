import {Component, OnInit, Input} from '@angular/core';
import {Settings} from "../menu/settings/Settings";
import {WordValue} from "./WordValue";
import {Word} from "./Word";

@Component({
    selector: 'app-word',
    templateUrl: './word.component.html',
    styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

    @Input()
    settings: Settings;

    @Input()
    data: WordValue;

    word: Word;

    constructor() {
    }

    ngOnInit() {
        this.word = new Word(this.data);
    }

    handleSettingsChange(settings: Settings){
        this.settings = settings;
        // this.settings = Object.assign({}, settings);
    }

}
