import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-nt-nine',
  templateUrl: './nt-nine.component.html',
  styleUrls: ['./nt-nine.component.scss'],
})
export class NtNineComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: 'Nazareth',
      attended: false,
    },
    {
      label: 'Bethléem',
      attended: true,
    },
    {
      label: 'Capharnaüm',
      attended: false,
    },
    {
      label: 'Jérusalem',
      attended: false,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
