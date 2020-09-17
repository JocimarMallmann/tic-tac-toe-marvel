import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() eventEmitName = new EventEmitter<string>();

  debounce: Subject<string> = new Subject<string>(); // para ajudar na performace

  constructor() { }

  ngOnInit(): void {
      this.debounce.pipe(debounceTime(300)).subscribe((name) => {
          console.log(name);
          this.eventEmitName.emit(name)
      });
  }

  ngOnDestroy(): void {
      this.debounce.unsubscribe();
  }

  preventDefault(e: Event) {
    e.preventDefault();
  }

}
