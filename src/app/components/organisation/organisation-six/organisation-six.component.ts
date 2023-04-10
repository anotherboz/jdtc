import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-organisation-six',
  templateUrl: './organisation-six.component.html',
  styleUrls: ['./organisation-six.component.scss'],
})
export class OrganisationSixComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: '200 millions d’euros',
      attended: false,
    },
    {
      label: '2 milliards d’euros',
      attended: false,
    },
    {
      label: '20 milliards d’euros',
      attended: false,
    },
    {
      label: '2000 milliards d’euros',
      attended: true,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
