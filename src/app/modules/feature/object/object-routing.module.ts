import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeatureGroupListComponent} from "../feature-group/feature-group-list/feature-group-list.component";
import {FeatureGroupComponent} from "../feature-group/feature-group.component";
import {ObjectListComponent} from "./object-list/object-list.component";
import {ObjectComponent} from "./object.component";

const routes: Routes = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'list'
    },
    {
        path     : 'list',
        component: ObjectComponent,
        children : [
            {
                path     : '',
                component: ObjectListComponent,
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
export class ObjectRoutingModule { }
