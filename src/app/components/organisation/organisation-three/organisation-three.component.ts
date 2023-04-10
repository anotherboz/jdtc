import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-organisation-three',
  templateUrl: './organisation-three.component.html',
  styleUrls: ['./organisation-three.component.scss'],
})
export class OrganisationThreeComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: "Un prélat participant au gouvernement de l'Église catholique",
      attended: true,
    },
    {
      label: "Un oiseau passereau d'Amérique au plumage rouge foncé",
      attended: true,
    },
    {
      label: 'Un nombre qui désigne une quantité',
      attended: true,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
