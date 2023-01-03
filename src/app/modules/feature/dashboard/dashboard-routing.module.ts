import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsListComponent} from "../events/events-list/events-list.component";
import {EventsComponent} from "../events/events.component";
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
    {
        path      : '',
        pathMatch : 'full',
        component: DashboardComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
