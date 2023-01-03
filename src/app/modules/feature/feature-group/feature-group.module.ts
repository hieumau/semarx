import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressBarModule} from "@angular/material/progress-bar";

import { FeatureGroupRoutingModule } from './feature-group-routing.module';
import { FeatureGroupComponent } from './feature-group.component';
import { FeatureGroupListComponent } from './feature-group-list/feature-group-list.component';
import { FeatureGroupEditDialogComponent } from './feature-group-edit-dialog/feature-group-edit-dialog.component';


@NgModule({
  declarations: [
    FeatureGroupComponent,
    FeatureGroupListComponent,
    FeatureGroupEditDialogComponent
  ],
    imports: [
        CommonModule,
        FeatureGroupRoutingModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatCheckboxModule
    ]
})
export class FeatureGroupModule { }
