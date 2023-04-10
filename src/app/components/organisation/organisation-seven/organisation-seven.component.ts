import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-organisation-seven',
  templateUrl: './organisation-seven.component.html',
  styleUrls: ['./organisation-seven.component.scss'],
})
export class OrganisationSevenComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: '330 000 victimes',
      attended: true,
    },
    {
      label: '650 000 victimes',
      attended: false,
    },
    {
      label: '1 250 000 victimes',
      attended: false,
    },
    {
      label: '3 600 000 victimes',
      attended: false,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
