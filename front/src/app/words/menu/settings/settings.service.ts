import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Settings} from "./Settings";

@Injectable()
export class SettingsService {

  settings$: BehaviorSubject<Settings> = new BehaviorSubject<Settings>(null);

  constructor() { }

}
