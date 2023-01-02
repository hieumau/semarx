import {Injectable} from '@angular/core';
import * as events from "events";
import {BehaviorSubject, Observable} from "rxjs";
import {eventModals} from "../../mock-api/data/eventModals";
import {EventModal} from "../../shared/model/event.model";

@Injectable({
    providedIn: 'root'
})
export class EventService {
    private _eventList: BehaviorSubject<EventModal[] | null> = new BehaviorSubject(null);

    constructor() {
    }

    getList() : Observable<EventModal[]> {
        this._eventList.next(eventModals)
        return this._eventList.asObservable()
    }
}
