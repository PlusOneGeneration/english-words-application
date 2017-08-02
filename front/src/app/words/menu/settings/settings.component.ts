import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Settings} from "./Settings";
import {StorageService} from "../../local-storage.service";
import {MenuService} from "../menu.service";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    @Output() settingsUpdated = new EventEmitter();

    settings: any;

    constructor(private storageService: StorageService,
                private  menuService: MenuService) {
    }

    ngOnInit() {
        let settings = this.storageService.get('Settings');
        this.settings = settings ? settings : new Settings();
        this.menuService.settings$.next(this.settings);
        this.settingsUpdated.emit(this.settings);
    }

    settingsChange(e) {
        this.menuService.settings$.next(this.settings);
        this.settingsUpdated.emit(this.settings);
        this.storageService.add('Settings', this.settings);
    }


}
