import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nt-seventeen',
  templateUrl: './nt-seventeen.component.html',
  styleUrls: ['./nt-seventeen.component.scss'],
})
export class NtSeventeenComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
}
