import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/picture-list/picture-list.component';

@Component({
  selector: 'app-at-two',
  templateUrl: './at-two.component.html',
  styleUrls: ['./at-two.component.scss']
})
export class AtTwoComponent implements OnInit {
  @Output() next = new EventEmitter<number>()

  questions: Question[] = [
    {
      label: 'Canon',
      attended: false,
      url: 'assets/canon.png'
    },
    {
      label: 'Bombe',
      attended: false,
      url: 'assets/bombe.png'
    },
    {
      label: 'Rouleaux',
      attended: false,
      url: 'assets/rouleaux.png'
    },
    {
      label: 'Chaîne',
      attended: false,
      url: 'assets/chaine.png'
    }
  ]

  score?: number = undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
