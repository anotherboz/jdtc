import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';


@Component({
  selector: 'app-at-seven',
  templateUrl: './at-seven.component.html',
  styleUrls: ['./at-seven.component.scss']
})
export class AtSevenComponent implements OnInit {
  @Output() next = new EventEmitter<number>()

  readonly questions: Question[] = [{
    label: 'Ils n\'avaient pas payé le loyer',
    attended: false,
  },
  {
    label: 'Eve a manger la pomme de la connaissance',
    attended: true
  },
  {
    label: 'La pomme en question ça symbolise le sexe',
    attended: true
  },
  {
    label: 'Au bout d\'un moment ils s\'emmerdaient grave',
    attended: false,
  },
]

  score?: number = undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
