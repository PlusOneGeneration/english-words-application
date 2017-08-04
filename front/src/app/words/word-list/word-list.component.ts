import {Component, OnInit} from '@angular/core';

import {WordValue} from "../word/WordValue";
import {WordsService} from "../words.service";
import {WordsQuery} from "./WordsQuery";
import {Settings} from "../../menu/settings/Settings";
import {StorageService} from "../../local-storage.service";
declare var $: any;

@Component({
    selector: 'app-word-list',
    templateUrl: './word-list.component.html',
    styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {

    words: WordValue[] = [];
    settings: Settings;
    query: WordsQuery;

    throttle = '100';
    scrollDistance = '17';
    loading: boolean = false;

    favoriteList: any[] = [];
    finished: boolean = false;

    constructor(private wordsService: WordsService,
                private storageService: StorageService) {
    }

    ngOnInit() {
        $.material.init();
        this.query = {skipping: 0, numberOfWords: 7};

        let category = this.storageService.get('Category');
        if (category) {
            this.query.category = category;
        }
        this.getFavoriteFromStorage();

        this.query.category !== 'Favorite'
            ? this.getWords()
            : this.getFavorite();
    }

    getFavoriteFromStorage() {
        let favorite: any = this.storageService.get('Favorite');
        if (favorite) {
            this.favoriteList = JSON.parse(favorite);}
    }

    getFavorite() {
      if(this.favoriteList&&this.favoriteList.length){
          if (this.favoriteList.length >= this.query.skipping) {
              this.loadFavorite(this.query.skipping);

          } else {
              this.finished = true;
              this.loading = false;
          }
      }
    }

    loadFavorite(skipping: any) {
        let favoriteListSlice = this.favoriteList.slice(skipping, skipping + this.query.numberOfWords);
        this.wordsService.getFavorite(favoriteListSlice)
            .then((words) => {
                if (words.length !== 0) {
                    words.forEach((word) => {
                        this.words.push(word);
                    });
                    this.loading = false;
                } else {
                    this.loading = false;
                }
            })
            .catch((err) => {
                console.log('err', err);
                this.loading = false;
            })
    }

    getWords() {
        this.loading = true;
        this.wordsService.getWords(this.query)
            .then((words) => {
                if (words.length !== 0) {
                    words.forEach((word) => {
                        this.loading = false;
                        this.words.push(word);
                    })
                } else {
                    this.loading = false;
                }
            })
            .catch((err) => {
                console.log('err', err);
                this.loading = false;
            })
    }

    handleCategoryChange(category) {
        this.query.category = category;
        this.query.skipping = 0;
        this.words = [];
        this.query.category !== 'Favorite'
            ? this.getWords()
            : this.getFavorite();
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
        if (!this.loading && !this.finished) {
            this.query.skipping += this.query.numberOfWords;

            this.query.category !== 'Favorite'
                ? this.getWords()
                : this.getFavorite();

            this.query.numberOfWords = 10;
        }
    }

    handleFavoriteChange(word: any) {
        if (word.status == 'removed') {

            this.removeFromFavorite(word.id);
            if (this.query.category == 'Favorite') {

                this.loading = true;
                this.words = [];
                this.loadFavorite(0)
            }
        } else {
            this.addToFavorite(word.id)
        }
    }

    addToFavorite(id: string) {
        this.favoriteList.push(id);
        this.storageService.add('Favorite', JSON.stringify(this.favoriteList));
    }

    removeFromFavorite(id: string) {
        this.favoriteList.find((_id, i) => {
            if (_id == id) {
                this.favoriteList.splice(i, 1);
                this.storageService.add('Favorite', JSON.stringify(this.favoriteList));
                return true;
            }
        })
    }

}
