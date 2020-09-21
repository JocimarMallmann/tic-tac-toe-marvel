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
  @Output() eventKeyupEnter = new EventEmitter();

  debounce: Subject<string> = new Subject<string>();
  debounceEnter: Subject<string> = new Subject<string>();

  constructor() { }
  /**
   * componente pode ser usado para fins de pesquisa onde é possível fazer requisições a cada 300ms para trazer sugestões ou para apenas 1 requisição direta com o Enter
   */
  ngOnInit(): void {
    // Emitindo o valor através do evento input
    this.debounce.pipe(debounceTime(300)).subscribe(
      (name) => this.eventEmitName.emit(name)
    );
    // Emitindo o valor através do evento keyup
    this.debounceEnter.subscribe(
      (name) => this.eventKeyupEnter.emit(name)
    );
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
    this.debounceEnter.unsubscribe();
  }

  preventDefault(event: Event) {
    // Evitando o submit do formulário
    event.preventDefault();
  }

  onEventKeyupEnter(event) {
    if(event.keyCode === 13) {
      this.debounceEnter.next(event.target.value);
    }
  }

}
