import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMessageComponent } from './error-message.component';

// import { ShowHideModule } from '../directives/show-hide/show.hide.module';


@NgModule({
  declarations: [
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    // ShowHideModule,
  ],
  exports: [
    ErrorMessageComponent
  ]
})
export class ErrorMessageModule { }
