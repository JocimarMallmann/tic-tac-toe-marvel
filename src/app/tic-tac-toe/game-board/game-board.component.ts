import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { IFinisherGame } from './IFinisherGame';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  readonly ROWS: number = 3;
  readonly EMPTY: number = 0;
  readonly X: number = 1;
  readonly O: number = 2;
  player: number = null;
  gameBoard = [];
  plays: number = 0; // número de jogadas
  victory: boolean = false;
  empate: boolean = false;
  finisher: IFinisherGame = null;
  @Output() playerWin: EventEmitter<any> = new EventEmitter(); // emite o jogador vencedor

  constructor() { }

  ngOnInit(): void {
    this.initGameBoard();
  }

  initGameBoard() {
    for(let i = 0; i < this.ROWS; i++) {
      this.gameBoard[i] = [this.EMPTY, this.EMPTY, this.EMPTY];
    }
    console.log(this.gameBoard);
    this.resetGameValues();
    this.player = this.drawPlayer();
  }
  resetGameValues() {
    this.empate = false;
    this.victory = false;
    this.finisher = null;
    this.plays = 0;
  }

  // Faz a jogada
  play(i, j) {
    console.log(i, j);
    if(this.gameBoard[i][j] !== this.EMPTY || this.victory) {
      console.log('casa indisponível');
      return;
    }
    console.log(this.gameBoard);

    // adicionando jogada
    this.gameBoard[i][j] = this.player;
    this.plays++; // incrementa número de jogadas
    // verifica se o jogador venceu, e retorna um objeto que contém o jogador
    this.finisher = this.isWin(i, j);
    console.log(this.finisher);
    if(this.finisher) {
      this.playerWin.emit(this.finisher.player); // emite o jogador vencedor
    }
    // troca a vez do jogador.
    this.changePlayer(this.player);
  }

  // validação do tabuleiro
  winnerValidation(row: number, col: number, gameBoard: any, player: number): IFinisherGame {
    let finisher = null;
    // Validando linhas
    if(gameBoard[row][0] === player &&
      gameBoard[row][1] === player &&
      gameBoard[row][2] === player) {
        finisher = {
          player: player,
          position: [[row,0],[row,1],[row,2]]
        };
      }
    // Validando colunas
    if(gameBoard[0][col] === player &&
      gameBoard[1][col] === player &&
      gameBoard[2][col] === player) {
        finisher = {
          player: player,
          position: [[0,col],[1,col],[2,col]]
        };
      }
    // Validando diagonais
    if(gameBoard[0][0] === player &&
      gameBoard[1][1] === player &&
      gameBoard[2][2] === player) {
        finisher = {
          player: player,
          position: [[0,0],[1,1],[2,2]]
        };
      }
    if(gameBoard[0][2] === player &&
      gameBoard[1][1] === player &&
      gameBoard[2][0] === player) {
        finisher = {
          player: player,
          position: [[0,2],[1,1],[2,0]]
        };
      }
    return finisher;
  }
  // verifica se tem um vencedor
  isWin(posX, posY): Object {
    let finisher = this.winnerValidation(
      posX, posY, this.gameBoard, this.player
    );
    if(finisher) {
      this.victory = true;
    }
    if(this.plays > 8 && !finisher) {
      this.empate = true;
    }
    console.log('vítoria: ', this.victory, ' empate: ', this.empate);
    return finisher;
  }
  // alterna a vez dos jogadores
  changePlayer(player) {
    if(player === 1) {
      ++this.player;
    } else {
      --this.player;
    }
  }

  // Sortea qual jogador começa
  drawPlayer(): number {
    // console.log(Math.round(Math.random() * 1) + 1);
    return Math.round(Math.random() * 1) + 1;
  }
  // Exibe o 'X' na posição escolhida
  showX(posX: number, posY: number): boolean {
    return this.gameBoard[posX][posY] === this.X;
  }
  // Exibe o 'O' na posição escolhida
  showO(posX: number, posY: number): boolean {
    return this.gameBoard[posX][posY] === this.O;
  }


}
