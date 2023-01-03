import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {eventList} from "../../mock-api/data/event-data";
import {featureGroupList} from "../../mock-api/data/feature-group-data";
import {EventModal} from "../model/event.model";
import {FeatureGroup} from "../model/feature-group.model";

@Injectable({
  providedIn: 'root'
})
export class FeatureGroupService {
    private _dataList: BehaviorSubject<FeatureGroup[] | null> = new BehaviorSubject(null);

    constructor() {
    }

    getList() : Observable<FeatureGroup[]> {
        this._dataList.next(featureGroupList)
        return this._dataList.asObservable()
    }
}
