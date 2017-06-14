import {Component, OnInit} from '@angular/core';

import {WordValue} from "../word/WordValue";
import {WordsService} from "../words.service";
import {WordsQuery} from "./WordsQuery";
import {Settings} from "../menu/settings/Settings";
import {StorageService} from "../local-storage.service";


@Component({
    selector: 'app-word-list',
    templateUrl: './word-list.component.html',
    styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {

    words: WordValue[] = [];
    settings: Settings;
    query: WordsQuery;

    throttle = '10';
    scrollDistance = '0';

    constructor(private wordsService: WordsService,
                private storageService: StorageService) {
    }

    ngOnInit() {
        this.query = {skipping: 0, numberOfWords: 8};

        let category = this.storageService.get('Category');
        if (category) {
            this.query.category = category;
        }

        this.getWords();
    }

    getWords() {
        this.wordsService.getWords(this.query)
            .then((words) => {
                words.forEach((word) => {
                    this.words.push(word);
                })
            })
    }

    handleCategoryChange(category) {
        this.query.category = category;
        this.query.skipping = 0;
        this.words = [];
        this.getWords();
    }

    handleSettingsChange(settings: Settings) {
        this.settings = settings;
    }

    handleBookmarkUsed(bookmark: WordsQuery) {
        this.query = bookmark;
        this.words = [];
        this.getWords();
    }

    onScrollDown() {
        this.query.skipping += this.query.numberOfWords;
        this.getWords();

    }

}
