import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Settings} from "./Settings";
import {StorageService} from "../../local-storage.service";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    @Output() settingsUpdated = new EventEmitter();

    settings: any;

    constructor(private storageService: StorageService) {
    }

    ngOnInit() {
        let settings = this.storageService.get('Settings');
        this.settings = settings ? settings : new Settings();
        this.settingsUpdated.emit(this.settings);
    }

    settingsChange(e) {
        if (!this.settings.sentences) {
            this.settings.sentencesWithTranslation = false;
        }

        if (!this.settings.synonyms) {
            this.settings.synonymsOnEnglish = false;
        }

        if (this.settings.images) {
            this.settings.imagesPreview = false;
        }

        this.settingsUpdated.emit(this.settings);
        this.storageService.add('Settings', this.settings);
    }


}
