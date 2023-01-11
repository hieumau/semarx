import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {futureList} from "../../mock-api/data/feature-data";
import {objectList} from "../../mock-api/data/object-data";
import {Feature} from "../model/feature.model";
import {Object} from "../model/object.model";

@Injectable({
  providedIn: 'root'
})
export class ObjectService {
    private _dataList: BehaviorSubject<Object[] | null> = new BehaviorSubject(null);

    constructor() {
    }

    getList() : Observable<Object[]> {
        this._dataList.next(objectList)
        return this._dataList.asObservable()
    }
}
