import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {WordsService} from "../../words.service";
import {StorageService} from "../../local-storage.service";

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
    categories: String[] = [];
    currentCategory: any;

    @Output() categoryUpdated = new EventEmitter();

    constructor(private wordsService: WordsService,
                private storageService: StorageService) {
    }

    ngOnInit() {
        this.currentCategory = this.storageService.get('Category') ? this.storageService.get('Category') : 'All';
        this.wordsService.getCategories()
            .then((categories) => {
                this.categories = categories;
                this.categories.push('All');
            })

    }

    categoryChange(category: string) {
        this.currentCategory = category;
        if (category === 'All') {
            category = null;
        }
        this.categoryUpdated.emit(category);
        this.storageService.add('Category', category);
    }


}
