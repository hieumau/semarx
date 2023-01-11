import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressBarModule} from "@angular/material/progress-bar";

import { ObjectRoutingModule } from './object-routing.module';
import { ObjectComponent } from './object.component';
import { ObjectListComponent } from './object-list/object-list.component';


@NgModule({
  declarations: [
    ObjectComponent,
    ObjectListComponent
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
        MatCheckboxModule
    ]
})
export class ObjectModule { }
