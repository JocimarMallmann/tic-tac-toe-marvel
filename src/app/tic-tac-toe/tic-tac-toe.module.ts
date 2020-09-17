import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicTacToeComponent } from './tic-tac-toe.component';

import { GameBoardModule } from './game-board/game-board.module';
import { ThumbnailModule } from './thumbnail/thumbnail.module';
import { SelectPlayersModule } from './select-players/select-players.module';


@NgModule({
  declarations: [
    TicTacToeComponent
  ],
  imports: [
    CommonModule,
    GameBoardModule,
    ThumbnailModule,
    SelectPlayersModule
  ],
  exports: [
    TicTacToeComponent
  ]
})
export class TicTacToeModule { }
