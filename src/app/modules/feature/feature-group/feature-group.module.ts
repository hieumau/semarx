import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureGroupRoutingModule } from './feature-group-routing.module';
import { FeatureGroupComponent } from './feature-group.component';
import { FeatureGroupListComponent } from './feature-group-list/feature-group-list.component';


@NgModule({
  declarations: [
    FeatureGroupComponent,
    FeatureGroupListComponent
  ],
  imports: [
    CommonModule,
    FeatureGroupRoutingModule
  ]
})
export class FeatureGroupModule { }
