import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-nt-one',
  templateUrl: './nt-one.component.html',
  styleUrls: ['./nt-one.component.scss'],
})
export class NtOneComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: 'Bonne nouvelle',
      attended: true,
    },
    {
      label: 'Ca va mal finir',
      attended: false,
    },
    {
      label: 'La life de Jésus',
      attended: false,
    },
    {
      label: 'Frites à volonté',
      attended: false,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
