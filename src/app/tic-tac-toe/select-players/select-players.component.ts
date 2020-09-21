import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-players',
  templateUrl: './select-players.component.html',
  styleUrls: ['./select-players.component.scss']
})
export class SelectPlayersComponent implements OnInit {

  characterName: string;
  @Output() eventKeyupEnter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  nameSearchEnter(name) {
    this.characterName = name;
    // console.log('nameSearchEnter: ', this.characterName);
    this.eventKeyupEnter.emit(this.characterName);
  }

}
