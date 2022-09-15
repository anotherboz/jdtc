import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-nt-eleven',
  templateUrl: './nt-eleven.component.html',
  styleUrls: ['./nt-eleven.component.scss'],
})
export class NtElevenComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  readonly questions: Question[] = [
    {
      label: 'Il transforme l’eau en vin',
      attended: true,
    },
    {
      label: 'Il ressuscite la mariée',
      attended: false,
    },
    {
      label: 'Il annonce au couple qu’ils auront un fils',
      attended: false,
    },
    {
      label: 'Il multiplie les navettes',
      attended: false,
    },
  ];

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
