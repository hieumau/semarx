import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsListComponent} from "../events/events-list/events-list.component";
import {EventsComponent} from "../events/events.component";
import {FeatureListComponent} from "./feature-list/feature-list.component";
import {FeatureComponent} from "./feature.component";

const routes: Routes = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'list'
    },
    {
        path     : 'list',
        component: FeatureComponent,
        children : [
            {
                path     : '',
                component: FeatureListComponent,
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
export class FeatureRoutingModule { }
