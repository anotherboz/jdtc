import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-organisation-two',
  templateUrl: './organisation-two.component.html',
  styleUrls: ['./organisation-two.component.scss'],
})
export class OrganisationTwoComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: 'De sa construction au 16eme siècle',
      attended: false,
    },
    {
      label: 'De Sixte IV, Pape qui l’a faite construire',
      attended: true,
    },
    {
      label:
        'Du fait que c’est la 16ème et dernière chapelle construite au Vatican',
      attended: false,
    },
    {
      label: 'Sixte 1er, Pape mort en 115 qui institua le Carême',
      attended: false,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
