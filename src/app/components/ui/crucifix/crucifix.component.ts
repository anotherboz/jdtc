import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crucifix',
  templateUrl: './crucifix.component.html',
  styleUrls: ['./crucifix.component.scss']
})
export class CrucifixComponent implements OnInit {
  @Input() word!: string;
  @Output() success = new EventEmitter<number>();
  letters: { letter: string; found: boolean }[] = [];
  step = 1;
  done = false;
  result?: number;
  constructor() { }

  ngOnInit(): void {
    this.letters = this.word.split('').map(l => ({letter: l, found: false }))
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;
    console.log(key);
    if (this.done) {
      return;
    }

    let oneFound = false;
    this.letters.forEach(l => {
      if(l.letter === key) {
        l.found = true;
        oneFound = true;
      }
    });

    if (this.letters.every(l => l.found)) {
      this.done = true;
      this.result = 1;
      this.success.emit(1);
    }
    if (oneFound) {
      return;
    }
    if (this.step===7) {
      this.done = true;
      this.result = 0;
      this.success.emit(0);
      return;
    }
    this.step++;

  }

}
