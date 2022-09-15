import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-nt-thristeen',
  templateUrl: './nt-thristeen.component.html',
  styleUrls: ['./nt-thristeen.component.scss'],
})
export class NtThristeenComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: 'Au bord du lac',
      attended: false,
    },
    {
      label: 'Dans la plaine',
      attended: false,
    },
    {
      label: 'Sur la montagne',
      attended: true,
    },
    {
      label: 'Dans la forêt',
      attended: false,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
