import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    DefaultConfigRoutingModule
  ]
})
export class DefaultConfigModule { }
