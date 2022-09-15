import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nt-sixteen',
  templateUrl: './nt-sixteen.component.html',
  styleUrls: ['./nt-sixteen.component.scss'],
})
export class NtSixteenComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
}
