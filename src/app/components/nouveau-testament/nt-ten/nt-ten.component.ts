import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-nt-ten',
  templateUrl: './nt-ten.component.html',
  styleUrls: ['./nt-ten.component.scss'],
})
export class NtTenComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: 'du même village',
      attended: false,
    },
    {
      label: 'de la même secte essénienne',
      attended: false,
    },
    {
      label: 'cousins',
      attended: true,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
