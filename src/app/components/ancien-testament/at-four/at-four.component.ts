import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-at-four',
  templateUrl: './at-four.component.html',
  styleUrls: ['./at-four.component.scss']
})
export class AtFourComponent implements OnInit {
  @Output() next = new EventEmitter<number>()

  readonly questions: Question[] = [{
    label: '1er siècle après J.C.',
    attended: false,
  },
  {
    label: '1er siècle avant J.C.',
    attended: false,
  },
  {
    label: '5ème siècle avant J.C.',
    attended: false
  },
  {
    label: '8ème siècle avant J.C.',
    attended: true
  }
]


  score?: number = undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
