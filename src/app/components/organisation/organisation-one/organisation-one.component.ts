import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-organisation-one',
  templateUrl: './organisation-one.component.html',
  styleUrls: ['./organisation-one.component.scss'],
})
export class OrganisationOneComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: 'Elu',
      attended: true,
    },
    {
      label: 'Désigné par son prédécesseur',
      attended: false,
    },
    {
      label: 'Tiré au sort',
      attended: false,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
