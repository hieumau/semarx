import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSortModule} from "@angular/material/sort";
import {SharedModule} from "../../../shared/shared.module";
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
        MatProgressBarModule,
        MatInputModule,
        MatIconModule,
        SharedModule,
        MatButtonModule,
        MatSortModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        MatPaginatorModule,
    ]
})
export class EventsModule {
}
