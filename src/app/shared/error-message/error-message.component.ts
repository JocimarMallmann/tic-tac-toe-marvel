import { Component,
          ElementRef,
          Input,
          OnChanges,
          OnInit,
          Renderer2,
          SimpleChanges,
          ViewChild } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit, OnChanges {

  @Input() text: string;
  @Input() error: boolean = false;
  @Input() attempts: number = 1;

  @ViewChild('divError', { static: true }) divError: ElementRef;

  constructor(private render: Renderer2) { }

  errorActived() {
    if(this.error && this.attempts > 1) {
      this.render.setStyle(this.divError.nativeElement, 'opacity', '1');
      setTimeout(
        () => this.render.setStyle(
          this.divError.nativeElement, 'opacity', '0'), 3000
        );
    } else {
      this.render.setStyle(this.divError.nativeElement, 'opacity', '0')
    }
  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.error || changes.attempts) {
      console.log('attempts',changes.attempts);
      this.errorActived();
    }
  }

}
