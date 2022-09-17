import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-messe-five',
  templateUrl: './messe-five.component.html',
  styleUrls: ['./messe-five.component.scss'],
})
export class MesseFiveComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  score?: number = undefined;

  constructor() {}

  ngOnInit(): void {}
}
