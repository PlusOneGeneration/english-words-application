import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Settings} from "../menu/settings/Settings";
import {SettingsService} from "../menu/settings/settings.service";

@Component({
    selector: 'app-word-settings',
    templateUrl: './word-settings.component.html',
    styleUrls: ['./word-settings.component.css']
})
export class WordSettingsComponent implements OnInit {

    @Output() wordSettingsUpdated = new EventEmitter();
    settings: any;


    constructor(private settingsService: SettingsService) {
    }

    ngOnInit() {
        this.settingsService.settings$
            .subscribe((settings) => {
                this.settings = settings ? Object.assign({}, settings) : new Settings();
                this.settingsChange();
            });
    }

    settingsChange() {
        if (this.settings.images) {
            this.settings.imagesPreview = false;
        }
        this.wordSettingsUpdated.emit(this.settings);
    }

}
