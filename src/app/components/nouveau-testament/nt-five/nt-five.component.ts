import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-nt-five',
  templateUrl: './nt-five.component.html',
  styleUrls: ['./nt-five.component.scss'],
})
export class NtFiveComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: 'Un pigeon',
      attended: false,
    },
    {
      label: 'Un touriste',
      attended: false,
    },
    {
      label: 'Un loup',
      attended: false,
    },
    {
      label: 'Un lion',
      attended: true,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
