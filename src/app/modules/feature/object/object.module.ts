import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    ObjectRoutingModule
  ]
})
export class ObjectModule { }
