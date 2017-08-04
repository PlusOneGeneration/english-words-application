import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Settings} from "../../menu/settings/Settings";
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

    @Input()
    favoriteList: any[] = [];

    @Output()
    favoriteChange = new EventEmitter();

    word: Word;
    isFavorite: boolean = false;

    constructor() {
    }

    ngOnInit() {
        this.word = new Word(this.data);
        this.checkInFavorites();
    }

    handleSettingsChange(settings: Settings) {
        this.settings = settings;
        if (this.settings.favorite && !this.isFavorite) {
            this.changedFavorite({id: this.data._id, status: 'added'});
            this.isFavorite = true;
        }
        if (!this.settings.favorite && this.isFavorite) {
            this.changedFavorite({id: this.data._id, status: 'removed'});
            this.isFavorite = false;
        }
    }

    checkInFavorites() {
        this.favoriteList.find((id) => {
            if (id === this.data._id) {
                this.isFavorite = true;
                return true;
            }
        })
    }

    changedFavorite(word: any) {
        this.favoriteChange.emit(word);
    }


}
