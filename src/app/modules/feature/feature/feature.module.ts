import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {SharedModule} from "../../../shared/shared.module";

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { FeatureEditDialogComponent } from './feature-edit-dialog/feature-edit-dialog.component';


@NgModule({
  declarations: [
    FeatureListComponent,
    FeatureEditDialogComponent
  ],
    imports: [
        CommonModule,
        FeatureRoutingModule,
        MatIconModule,
        SharedModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        MatPaginatorModule,
        MatCheckboxModule
    ]
})
export class FeatureModule { }
