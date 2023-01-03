import {Injectable} from '@angular/core';
import * as events from "events";
import {BehaviorSubject, Observable} from "rxjs";
import {eventList} from "../../mock-api/data/event-data";
import {EventModal} from "../../shared/model/event.model";

@Injectable({
    providedIn: 'root'
})
export class EventService {
    private _dataList: BehaviorSubject<EventModal[] | null> = new BehaviorSubject(null);

    constructor() {
    }

    getList() : Observable<EventModal[]> {
        this._dataList.next(eventList)
        return this._dataList.asObservable()
    }
}
