import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-nt-three',
  templateUrl: './nt-three.component.html',
  styleUrls: ['./nt-three.component.scss'],
})
export class NtThreeComponent implements OnInit {
  @Output() next = new EventEmitter<number>();
  @ViewChild('#inp') input?: ElementRef;

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {
    this.input?.nativeElement.focus();
  }
}
