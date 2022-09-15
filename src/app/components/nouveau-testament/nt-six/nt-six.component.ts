import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-nt-six',
  templateUrl: './nt-six.component.html',
  styleUrls: ['./nt-six.component.scss'],
})
export class NtSixComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: 'Un taureau',
      attended: true,
    },
    {
      label: 'Une licorne',
      attended: false,
    },
    {
      label: 'Un âne',
      attended: false,
    },
    {
      label: 'Un dragon',
      attended: true,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
