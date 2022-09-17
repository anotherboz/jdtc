import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-messe-four',
  templateUrl: './messe-four.component.html',
  styleUrls: ['./messe-four.component.scss'],
})
export class MesseFourComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: 'Youpi!',
      attended: true,
    },
    {
      label: 'Seigneur vient !',
      attended: false,
    },
    {
      label: 'Donne nous…',
      attended: false,
    },
    {
      label: 'Ainsi soit-il',
      attended: false,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
