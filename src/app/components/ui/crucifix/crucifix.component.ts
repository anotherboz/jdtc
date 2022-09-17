import {
  AfterContentInit,
  AfterViewInit,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import Keyboard from 'simple-keyboard';

@Component({
  selector: 'app-crucifix',
  templateUrl: './crucifix.component.html',
  styleUrls: ['./crucifix.component.scss'],
})
export class CrucifixComponent implements OnInit, AfterViewInit {
  @Input() word!: string;
  @Output() score = new EventEmitter<number>();
  letters: { letter: string; found: boolean }[] = [];
  step = 1;
  done = false;
  result?: number;
  keyboard?: Keyboard;

  constructor() {}

  ngOnInit(): void {
    this.letters = this.word
      .split('')
      .map((l) => ({ letter: l, found: false }));
  }

  ngAfterViewInit(): void {
    const layout = {
      default: ['a z e r t y u i o p', 'q s d f g h j k l m', 'w x c v b n'],
      shift: [
        'A Z E R T Y U I O P',
        'Q S D F G H J K L M',
        '    W X C V B N    ',
      ],
    };

    this.keyboard = new Keyboard({
      onChange: (input) => this.pressKey(input.slice(-1)),
      layout,
      //onKeyPress: button => this.onKeyPress(button)
    });
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;
    this.pressKey(key);
  }

  private pressKey(key: string) {
    console.log(key);
    if (this.done) {
      return;
    }

    let oneFound = false;
    this.letters.forEach((l) => {
      if (l.letter.toLocaleLowerCase() === key.toLocaleLowerCase()) {
        l.found = true;
        oneFound = true;
      }
    });

    if (this.letters.every((l) => l.found)) {
      this.done = true;
      this.result = 1;
      setTimeout(
        () =>
          window.scroll({
            top: 400,
            left: 0,
            behavior: 'smooth',
          }),
        200
      );
      this.score.emit(1);
    }
    if (oneFound) {
      return;
    }
    this.step++;
    if (this.step === 7) {
      this.done = true;
      this.result = 0;
      setTimeout(
        () =>
          window.scroll({
            top: 400,
            left: 0,
            behavior: 'smooth',
          }),
        200
      );
      this.score.emit(0);
      return;
    }
  }
}
