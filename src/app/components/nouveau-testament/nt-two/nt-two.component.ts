import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-nt-two',
  templateUrl: './nt-two.component.html',
  styleUrls: ['./nt-two.component.scss'],
})
export class NtTwoComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: '1',
      attended: false,
    },
    {
      label: '4',
      attended: false,
    },
    {
      label: '7',
      attended: false,
    },
    {
      label: 'Plus de 20',
      attended: true,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
