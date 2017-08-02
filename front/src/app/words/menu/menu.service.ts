import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Settings} from "./settings/Settings";

@Injectable()
export class MenuService {

  settings$: BehaviorSubject<Settings> = new BehaviorSubject<Settings>(null);

  constructor() { }

}
