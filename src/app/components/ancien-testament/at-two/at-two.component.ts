import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-at-two',
  templateUrl: './at-two.component.html',
  styleUrls: ['./at-two.component.scss']
})
export class AtTwoComponent implements OnInit {
  @Output() next = new EventEmitter<number>()
  select?:number;
  score?: number = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  validate(): void {
    if (this.select === 1) {
      this.score = 1;
    } else {
      this.score = 0;
    }
  }
}
