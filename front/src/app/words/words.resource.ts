import {Injectable, Injector} from "@angular/core";
import {Http, RequestMethod} from "@angular/http";
import {
    Resource,
    ResourceAction,
    ResourceResult,
    ResourceMethod,
    ResourceParams,
    ResourceMethodStrict
} from 'ng2-resource-rest';

import {WordValue} from "./word/WordValue";
import {WordsQuery} from "./word-list/WordsQuery";

@Injectable()
@ResourceParams({
    url: 'api'
})
export class WordsResource extends Resource {

    constructor(http: Http, injector: Injector) {
        super(http, injector);
    }

    @ResourceAction({
        path: '/categories',
        method: RequestMethod.Get,
        isArray: true,
    })
    getCategories: ResourceMethod<null, string[]>;

    @ResourceAction({
        method: RequestMethod.Get,
        path: '/words',
        isArray: true,
    })
    getWords: ResourceMethod<WordsQuery, WordValue[]>;

    @ResourceAction({
        method: RequestMethod.Post,
        path: '/words/favorite',
        isArray: true,
    })
    getFavorite: ResourceMethod<any[], WordValue[]>;

}
