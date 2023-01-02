import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsListComponent} from "./events-list/events-list.component";

import {EventsRoutingModule} from './events-routing.module';
import {EventsComponent} from "./events.component";


@NgModule({
    declarations: [
        EventsComponent,
        EventsListComponent
    ],
    imports: [
        CommonModule,
        EventsRoutingModule,
    ]
})
export class EventsModule {
}
