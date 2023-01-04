import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {futureList} from "../../mock-api/data/feature-data";
import {featureGroupList} from "../../mock-api/data/feature-group-data";
import {FeatureGroup} from "../model/feature-group.model";
import {Feature} from "../model/feature.model";

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
    private _dataList: BehaviorSubject<Feature[] | null> = new BehaviorSubject(null);

    constructor() {
    }

    getList() : Observable<Feature[]> {
        this._dataList.next(futureList)
        return this._dataList.asObservable()
    }
}
