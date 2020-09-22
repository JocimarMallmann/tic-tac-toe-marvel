import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { IThumbnail } from './IThumbnail';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit, OnDestroy, OnChanges {

  @Input() thumbnail: IThumbnail;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.thumbnail) {
      console.log('ONCHANGES', this.thumbnail);
    }
  }
  ngOnDestroy(): void {
  }

}
