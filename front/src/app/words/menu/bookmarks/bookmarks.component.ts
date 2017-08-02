import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {StorageService} from "../../local-storage.service";
import {WordsQuery} from "../../word-list/WordsQuery";

@Component({
    selector: 'app-bookmarks',
    templateUrl: './bookmarks.component.html',
    styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

    marks: any[] = [];
    currentMark: any = null;

    @Input() query: WordsQuery = {};
    @Output() bookmarkUsed = new EventEmitter();

    constructor(private storageService: StorageService) {
    }

    ngOnInit() {
        this.get();
    }

    add() {
        this.marks.push(Object.assign({}, this.query));
        this.save();
    }

    remove(mark) {
        this.marks = this.marks.filter((_mark) =>
            (mark.category !== _mark.category) || (mark.skipping !== _mark.skipping)
        );
        this.save();

    }

    save() {
        this.storageService.add('Bookmarks', JSON.stringify(this.marks))
    }

    get() {
        let marks: any = this.storageService.get('Bookmarks');
        if (marks) {
            this.marks = JSON.parse(marks.toString());
        }
    }

    applyMark(mark) {
        this.currentMark = mark;
        this.bookmarkUsed.emit(Object.assign({}, mark));
    }

}
