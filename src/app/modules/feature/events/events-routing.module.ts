import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsListComponent} from "./events-list/events-list.component";
import {EventsComponent} from "./events.component";

const routes: Routes = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'list'
    },
    {
        path     : 'list',
        component: EventsComponent,
        children : [
            {
                path     : '',
                component: EventsListComponent,
                resolve  : {

                }
            },

        ]
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
