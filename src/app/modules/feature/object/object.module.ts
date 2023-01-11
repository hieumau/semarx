import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSelectModule} from "@angular/material/select";
import {SharedModule} from "../../../shared/shared.module";

import { ObjectRoutingModule } from './object-routing.module';
import { ObjectComponent } from './object.component';
import { ObjectListComponent } from './object-list/object-list.component';
import { ObjectFormDialogComponent } from './object-form-dialog/object-form-dialog.component';


@NgModule({
  declarations: [
    ObjectComponent,
    ObjectListComponent,
    ObjectFormDialogComponent
  ],
    imports: [
        CommonModule,
        ObjectRoutingModule,
        MatProgressBarModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatCheckboxModule,
        SharedModule,
        MatDialogModule,
        MatSelectModule
    ]
})
export class ObjectModule { }
