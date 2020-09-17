import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameBoardComponent } from './game-board.component';


@NgModule({
  declarations: [
    GameBoardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GameBoardComponent
  ]
})
export class GameBoardModule { }
