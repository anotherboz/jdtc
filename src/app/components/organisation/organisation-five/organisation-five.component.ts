import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-organisation-five',
  templateUrl: './organisation-five.component.html',
  styleUrls: ['./organisation-five.component.scss'],
})
export class OrganisationFiveComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
