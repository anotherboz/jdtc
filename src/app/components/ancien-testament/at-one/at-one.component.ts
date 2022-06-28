import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-at-one',
  templateUrl: './at-one.component.html',
  styleUrls: ['./at-one.component.scss']
})
export class AtOneComponent implements OnInit {
  @Output() next = new EventEmitter<number>()

  readonly questions: Question[] = [{
    label: 'Judaïsme',
    attended: true,
  },
  {
    label: 'Christrianisme',
    attended: true,
  },
  {
    label: 'Islam',
    attended: false
  },
  {
    label: 'Hindouisme',
    attended: false
  }
]


  score?: number = undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
