import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-nt-seventeen',
  templateUrl: './nt-seventeen.component.html',
  styleUrls: ['./nt-seventeen.component.scss'],
})
export class NtSeventeenComponent implements OnInit {
  @Output() next = new EventEmitter<number>();
  @ViewChild('#inp') input?: ElementRef;

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {
    this.input?.nativeElement.focus();
  }
}
