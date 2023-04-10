import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-organisation-four',
  templateUrl: './organisation-four.component.html',
  styleUrls: ['./organisation-four.component.scss'],
})
export class OrganisationFourComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: 'Du latin catholicus qui veut dire “universel”',
      attended: false,
    },
    {
      label:
        'Du mot catéchisme qui désigne l’enseignement de la doctrine et de la morale',
      attended: false,
    },
    {
      label: 'De l’architecture des églises cathares',
      attended: false,
    },
    {
      label: 'De la cathèdre : le siège de l’évêque',
      attended: true,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
