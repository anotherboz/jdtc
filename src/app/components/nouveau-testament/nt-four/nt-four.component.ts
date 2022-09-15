import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-nt-four',
  templateUrl: './nt-four.component.html',
  styleUrls: ['./nt-four.component.scss'],
})
export class NtFourComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: 'Un poulet',
      attended: false,
    },
    {
      label: 'Un hibou',
      attended: false,
    },
    {
      label: 'Un homme (avec des ailes)',
      attended: true,
    },
    {
      label: 'Un cerf',
      attended: false,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
