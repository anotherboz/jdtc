import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Question {
  label: string;
  attended: boolean;
  url: string;
}

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.scss']
})
export class PictureListComponent implements OnInit {
  @Input() questions?: Question[];
  @Output() score = new EventEmitter<number>();
  selected?: number;
  result?: number;

  constructor() { }

  ngOnInit(): void {
  }

  select(i: number): void {
    if (this.questions === undefined) {
      return;
    }
    this.selected = i;
    if (this.questions[i].attended) {
      this.result = 1;
    } else {
      this.result = 0;
    }
    this.score.emit(this.result);
  }
}
