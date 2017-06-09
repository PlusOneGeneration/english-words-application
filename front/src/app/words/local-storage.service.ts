import {Injectable} from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';

@Injectable()
export class StorageService {

    constructor(private localStorageService: LocalStorageService) {
    }

    get(name) {
        return this.localStorageService.get(name)
    }

    add(name: string, data): void {
        this.localStorageService.set(name, data)
    }

}
