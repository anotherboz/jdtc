import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-messe-two',
  templateUrl: './messe-two.component.html',
  styleUrls: ['./messe-two.component.scss'],
})
export class MesseTwoComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: 'Youpi!',
      attended: false,
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
      attended: true,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
