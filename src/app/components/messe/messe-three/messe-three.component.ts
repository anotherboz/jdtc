import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-messe-three',
  templateUrl: './messe-three.component.html',
  styleUrls: ['./messe-three.component.scss'],
})
export class MesseThreeComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: 'Grec',
      attended: true,
    },
    {
      label: 'Latin',
      attended: false,
    },
    {
      label: 'Hébreux',
      attended: false,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
