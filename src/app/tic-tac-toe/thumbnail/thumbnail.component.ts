import { Component, Input, OnInit } from '@angular/core';

import { IThumbnail } from './IThumbnail';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

  @Input() thumbnail: IThumbnail = {
    points: 0,
    marginPhoto: '0px 8px 0px 0px'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
