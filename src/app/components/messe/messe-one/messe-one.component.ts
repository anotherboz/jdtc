import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-messe-one',
  templateUrl: './messe-one.component.html',
  styleUrls: ['./messe-one.component.scss'],
})
export class MesseOneComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label:
        'c’est le dernier jour de la semaine, le 7ème jour, le jour de Dieu',
      attended: true,
    },
    {
      label:
        'c’est le premier jour de la semaine et c’est le jour de la résurrection',
      attended: true,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
