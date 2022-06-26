import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-at-one',
  templateUrl: './at-one.component.html',
  styleUrls: ['./at-one.component.scss']
})
export class AtOneComponent implements OnInit {
  @Output() next = new EventEmitter<number>()
  judaisme = false;
  christrianisme = false;
  islam = false;
  hindouisme = false;

  score?: number = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  validate(): void {
    if (this.judaisme && this.christrianisme) {
      this.score = 1;
    } else {
      this.score = 0;
    }
  }
}
