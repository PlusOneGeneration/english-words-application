import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Settings} from "../settings/Settings";
import {MenuService} from "../menu.service";

@Component({
    selector: 'app-word-settings',
    templateUrl: 'word-settings.component.html',
    styleUrls: ['word-settings.component.css']
})
export class WordSettingsComponent implements OnInit {

    @Output() wordSettingsUpdated = new EventEmitter();
    settings: Settings = new Settings();

    @Input() isFavorite: boolean = false;

    constructor(private settingsService: MenuService) {
    }

    ngOnInit() {
        this.settingsService.settings$
            .subscribe((settings) => {
                this.settings = settings ? Object.assign({}, settings) : new Settings();
                this.settings.favorite = this.isFavorite;
            });
    }

    settingsChange() {
        this.wordSettingsUpdated.emit(this.settings);
    }

}
