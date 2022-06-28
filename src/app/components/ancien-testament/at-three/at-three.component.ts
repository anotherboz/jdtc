import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-at-three',
  templateUrl: './at-three.component.html',
  styleUrls: ['./at-three.component.scss']
})
export class AtThreeComponent implements OnInit {
  @Output() next = new EventEmitter<number>()

  score?: number = undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
