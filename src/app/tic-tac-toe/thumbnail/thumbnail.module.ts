import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThumbnailComponent } from './thumbnail.component';

import { PhotoModule } from './photo/photo.module';


@NgModule({
  declarations: [
    ThumbnailComponent
  ],
  imports: [
    CommonModule,
    PhotoModule
  ],
  exports: [
    ThumbnailComponent
  ]
})
export class ThumbnailModule { }
