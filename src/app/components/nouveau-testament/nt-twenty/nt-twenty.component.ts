import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-nt-twenty',
  templateUrl: './nt-twenty.component.html',
  styleUrls: ['./nt-twenty.component.scss'],
})
export class NtTwentyComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: '7',
      attended: false,
    },
    {
      label: '17',
      attended: false,
    },
    {
      label: '21',
      attended: false,
    },
    {
      label: '40',
      attended: true,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
