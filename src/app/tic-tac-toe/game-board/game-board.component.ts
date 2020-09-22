import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  ROWS: number = 3;
  EMPTY: number = 0;
  player: number = null;
  X: number = 1;
  O: number = 2;
  gameBoard = [];
  plays: number = 0;
  victory: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.initGameBoard();
  }

  initGameBoard() {
    for(let i = 0; i < this.ROWS; i++) {
      this.gameBoard[i] = [this.EMPTY, this.EMPTY, this.EMPTY];
    }
    console.log(this.gameBoard);
    this.player = this.drawPlayer();
  }

  play(i, j) {
    console.log(i, j);
    if(this.gameBoard[i][j] !== this.EMPTY || this.victory) {
      console.log('casa indisponível');
      return;
    }
    console.log(this.gameBoard);// debugger

    // adicionando jogada
    this.gameBoard[i][j] = this.player;
    this.plays++; // incrementa número de jogadas
    // verifica se o jogador venceu, e retorna um objeto que contém o jogador
    let finisher = this.isWin(i, j);
    console.log(finisher);
    // troca a vez do jogador.
    this.changePlayer(this.player);
  }

  winnerValidation(row: number, col: number, gameBoard: any, player: number): Object {
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
  isWin(posX, posY): Object {
    let finisher = this.winnerValidation(
      posX, posY, this.gameBoard, this.player
    );
    if(finisher) {
      this.victory = true;
    }
    return finisher;
  }

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
