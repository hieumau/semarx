import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";

import { DefaultConfigRoutingModule } from './default-config-routing.module';
import { DefaultConfigListComponent } from './default-config-list/default-config-list.component';
import { DefaultConfigComponent } from './default-config.component';


@NgModule({
  declarations: [
    DefaultConfigListComponent,
    DefaultConfigComponent
  ],
    imports: [
        CommonModule,
        DefaultConfigRoutingModule,
        MatProgressBarModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class DefaultConfigModule { }
