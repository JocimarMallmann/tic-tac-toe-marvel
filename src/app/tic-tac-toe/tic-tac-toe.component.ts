import { Component, OnInit } from '@angular/core';

import { IThumbnail } from './thumbnail/IThumbnail';
import { TicTacToeService } from './tic-tac-toe.service';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {

  marvel: any = {};
  private characterData: any[] = [];
  characters: IThumbnail[] = [];
  errors = {
    characterSearch: false,
    attempts: 1,
    message: ''
  };
  playerWin: number = 0;
  points: number = 0;
  ready: boolean = false; // se está pronto pra começar o jogo

  constructor(private tictactoeService: TicTacToeService) { }

  ngOnInit(): void {
  }

  playerWinPoint(event) {
    this.playerWin = event;
    console.log(this.playerWin);
    this.addPoints(this.characters);
  }

  nameSearchEnter(name) {

    this.tictactoeService.getCharacters().subscribe((marvel) => {
      this.marvel = marvel;
      this.characterData = marvel.data.results;
      console.log(this.characterData);

      this.addPlayer(name);
    }, (err) => {
      console.log(err);
      this.isError(true, 'Ocorreu um erro na requisição.');
    });
  }

  // Faz a busca pelo nome do personagem, nos dados puxados pela requisição
  filterCharacter(name) {
    return this.characterData.filter((character) => {
      name = name.trim().toLowerCase();
      return character.name.trim().toLowerCase().includes(name);
    });
  }

  // Adiciona players para jogar
  addPlayer(name: string) {
    if(this.characters.length >= 2) {
      this.isError(true, 'Players já selecionados.');
      return;
    }
    if(!name) {
      this.isError(true, 'Escolha um personagem da marvel.');
      return;
    }
    this.characterData = this.filterCharacter(name);

    if(this.characterData.length) {
      this.characters = this.characters.concat(
        this.createDataThumbnail(this.characterData[0])
      );
      this.isError(false, '', 1);
      console.log('addPlayer', this.characters);
    } else {
      this.isError(true, 'Nenhum nome encontrado');
    }
  }

  // "Aaron Stack" "Abyss"
  // Cria o objeto com as informações para o 'componente thumbnail' usar
  createDataThumbnail(character): IThumbnail {
    console.log('createDataThumbnail - ', character);
    return <IThumbnail>{
      id: character.id,
      characterName: character.name,
      characterImage: character.thumbnail.path + '.' + character.thumbnail.extension,
      points: 0,
      marginPhoto: this.characters.length == 1 ? '0px 0px 0px 16px' : '0px 16px 0px 0px',
      flexDirectionThumbnail: this.characters.length == 1 ? 'row-reverse' : ''
    }
  }

  // Adicionando pontos ao vencer
  addPoints(characters) {
    if(this.playerWin === 1) {
      characters[0].points++;
    }
    if(this.playerWin === 2) {
      characters[1].points++;
    }
  }

  twoPlayers(): boolean {
    return this.characters.length === 2;
  }
  // verifica se existem 2 players e se clicaram em começar para exibir o jogo
  isReadyPlayers(): boolean {
    if(!this.twoPlayers() || !this.ready) {
      return false;
    }
    return true;
  }
  readyPlayers() {
    if(!this.twoPlayers()) {
      console.log('selecione 2 jogadores.');
      this.isError(true, 'Selecione 2 jogadores e clique em Ready.');
    } else {
      this.ready = true;
    }
  }

  // metodo genérico para erros, criado para usar com o 'componente error-message'
  private isError(error: boolean, message?: string, attempts?: number) {
    console.log(message);
    this.errors.characterSearch = error;
    this.errors.attempts = ++this.errors.attempts;
    if(attempts) {
      this.errors.attempts = attempts;
    }
    this.errors.message = message;
  }


}
