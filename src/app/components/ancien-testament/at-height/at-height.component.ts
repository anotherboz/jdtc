import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/picture-list/picture-list.component';

@Component({
  selector: 'app-at-height',
  templateUrl: './at-height.component.html',
  styleUrls: ['./at-height.component.scss']
})
export class AtHeightComponent implements OnInit {
  @Output() next = new EventEmitter<number>()

  questions: Question[] = [
    {
      label: '',
      attended: false,
      url: 'assets/moise_mer.png'
    },
    {
      label: '',
      attended: false,
      url: 'assets/moise.jpg'
    },
    {
      label: '',
      attended: true,
      url: 'assets/abraham.png'
    },
    {
      label: '',
      attended: false,
      url: 'assets/moise_eaux.png'
    }
  ]

  score?: number = undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
