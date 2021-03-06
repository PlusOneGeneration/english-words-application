import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {WordsQuery} from "../words/word-list/WordsQuery";

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css']
})
export class MenuComponent {

    @Output() categoryUpdated = new EventEmitter();
    @Output() settingsUpdated = new EventEmitter();
    @Output() bookmarkUsed = new EventEmitter();
    @Input() query: WordsQuery;

    showSettings: boolean = false;

    handleCategoryChange(category) {
        this.categoryUpdated.emit(category);
    }

    handleSettingsChange(settings) {
        this.settingsUpdated.emit(settings);
    }

    handleBookmarkUsed(bookmark) {
        this.bookmarkUsed.emit(bookmark);
    }

    toggleSettings() {
        this.showSettings = !this.showSettings;
    }

}
