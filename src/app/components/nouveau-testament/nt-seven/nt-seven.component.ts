import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-nt-seven',
  templateUrl: './nt-seven.component.html',
  styleUrls: ['./nt-seven.component.scss'],
})
export class NtSevenComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: 'Un lapin',
      attended: false,
    },
    {
      label: 'Un ours',
      attended: false,
    },
    {
      label: 'Un aigle',
      attended: true,
    },
    {
      label: 'Un éléphant',
      attended: false,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
