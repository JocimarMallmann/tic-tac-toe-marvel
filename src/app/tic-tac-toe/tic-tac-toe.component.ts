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

  constructor(private tictactoeService: TicTacToeService) { }

  ngOnInit(): void {
  }

  nameSearchEnter(name) {
    // this.characterName = name;
    console.log('nameSearchEnter tic-tac-toe: ', name);

    this.tictactoeService.getCharacters().subscribe((marvel) => {
      this.marvel = marvel;
      this.characterData = marvel.data.results;
      console.log(this.characterData);

      // this.isError(false, '', 1);
      this.addPlayer(name);
    }, (err) => {
      console.log(err);
      this.isError(true, 'Ocorreu um erro na requisição.');
    });
  }



  filterCharacter(name) {
    return this.characterData.filter((character) => {
      name = name.trim().toLowerCase();
      return character.name.trim().toLowerCase().includes(name);
    });
  }

  addPlayer(name: string) {
    if(this.characters.length >= 2) {
      this.isError(true, 'Players já selecionados.');
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
  createDataThumbnail(character): IThumbnail {
    console.log('createDataThumbnail - ', character);
    return <IThumbnail>{
      id: character.id,
      characterName: character.name,
      characterImage: character.thumbnail.path + '.' + character.thumbnail.extension,
      points: 0,
      marginPhoto: this.characters.length == 1 ? '0px 0px 0px 12px' : '0px 12px 0px 0px',
      flexDirectionThumbnail: this.characters.length == 1 ? 'row-reverse' : ''
    }
  }

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
