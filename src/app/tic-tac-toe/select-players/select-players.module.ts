import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SelectPlayersComponent } from './select-players.component';
import { SearchModule } from '../search/search.module';


@NgModule({
  declarations: [
    SelectPlayersComponent
  ],
  imports: [
    CommonModule,
    SearchModule,
    HttpClientModule
  ],
  exports: [
    SelectPlayersComponent
  ]
})
export class SelectPlayersModule { }
