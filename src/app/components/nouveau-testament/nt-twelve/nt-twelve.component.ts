import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-nt-twelve',
  templateUrl: './nt-twelve.component.html',
  styleUrls: ['./nt-twelve.component.scss'],
})
export class NtTwelveComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: '16',
      attended: false,
    },
    {
      label: '70',
      attended: false,
    },
    {
      label: '13',
      attended: false,
    },
    {
      label: '12',
      attended: true,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
