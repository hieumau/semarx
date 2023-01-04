import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../../../shared/shared.module";

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureListComponent } from './feature-list/feature-list.component';


@NgModule({
  declarations: [
    FeatureListComponent
  ],
    imports: [
        CommonModule,
        FeatureRoutingModule,
        MatIconModule,
        SharedModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule
    ]
})
export class FeatureModule { }
