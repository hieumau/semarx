import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TableCellProgressBackgroundComponent } from './table-cell-progess-backgroud/table-cell-progress-background.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TableCellProgressBackgroundComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatProgressBarModule,
        MatButtonModule,
        MatIconModule,
    ]
})
export class DashboardModule { }
