import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsListComponent} from "../events/events-list/events-list.component";
import {EventsComponent} from "../events/events.component";
import {FeatureGroupListComponent} from "./feature-group-list/feature-group-list.component";
import {FeatureGroupComponent} from "./feature-group.component";

const routes: Routes = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'list'
    },
    {
        path     : 'list',
        component: FeatureGroupComponent,
        children : [
            {
                path     : '',
                component: FeatureGroupListComponent,
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
export class FeatureGroupRoutingModule { }
