import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-nt-heighteen',
  templateUrl: './nt-heighteen.component.html',
  styleUrls: ['./nt-heighteen.component.scss'],
})
export class NtHeighteenComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: 'Sur le mont des Oliviers',
      attended: false,
    },
    {
      label: 'Dans Gethsémani',
      attended: false,
    },
    {
      label: 'Sur le Golgotha',
      attended: true,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
