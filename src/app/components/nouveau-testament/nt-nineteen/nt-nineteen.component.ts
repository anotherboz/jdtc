import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nt-nineteen',
  templateUrl: './nt-nineteen.component.html',
  styleUrls: ['./nt-nineteen.component.scss'],
})
export class NtNineteenComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
}
