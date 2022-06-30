import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-at-five',
  templateUrl: './at-five.component.html',
  styleUrls: ['./at-five.component.scss']
})
export class AtFiveComponent implements OnInit {
    @Output() next = new EventEmitter<number>()

    readonly questions: Question[] = [{
      label: 'La création du monde',
      attended: true,
    },
    {
      label: 'Le déluge',
      attended: true
    },
    {
      label: 'La naissance de Jésus',
      attended: false
    },
    {
      label: 'Le jardin d’Eden',
      attended: true,
    },
  ]

    score?: number = undefined;

    constructor() { }

    ngOnInit(): void {
    }
  }
