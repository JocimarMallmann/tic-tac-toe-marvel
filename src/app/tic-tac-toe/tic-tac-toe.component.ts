import { Component, OnInit } from '@angular/core';
import { IThumbnail } from './thumbnail/IThumbnail';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {

  teste : IThumbnail[] = [
    {
      characterImage: 'https://imgur.com/IQ7JyXb.jpg',
      characterName: 'Batiman e Robin',
      points: 1,
      marginPhoto: '0 8px 0 0'
    },
    {
      characterImage: 'http://i.stack.imgur.com/AyzfI.jpg',
      characterName: 'Batiman e Robin',
      points: 1,
      marginPhoto: '0 0 0 8px',
      flexDirectionThumbnail: 'row-reverse'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
