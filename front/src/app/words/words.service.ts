import {Injectable} from '@angular/core';
import {WordsResource} from "./words.resource";

import 'rxjs/operator/toPromise'
import {WordsQuery} from "./word-list/WordsQuery";

@Injectable()
export class WordsService {

    constructor(private wordResource: WordsResource) {
    }

    getCategories() {
        return this.wordResource.getCategories()
            .$observable
            .toPromise()
    }

    getWords(query: WordsQuery) {
        return this.wordResource.getWords(query)
            .$observable
            .toPromise()
    }


}
