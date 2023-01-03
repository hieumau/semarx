import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsListComponent} from "../events/events-list/events-list.component";
import {EventsComponent} from "../events/events.component";
import {DefaultConfigListComponent} from "./default-config-list/default-config-list.component";
import {DefaultConfigComponent} from "./default-config.component";

const routes: Routes = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'list'
    },
    {
        path     : 'list',
        component: DefaultConfigComponent,
        children : [
            {
                path     : '',
                component: DefaultConfigListComponent,
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
export class DefaultConfigRoutingModule { }
