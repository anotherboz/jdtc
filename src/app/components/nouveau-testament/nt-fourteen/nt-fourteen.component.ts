import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nt-fourteen',
  templateUrl: './nt-fourteen.component.html',
  styleUrls: ['./nt-fourteen.component.scss'],
})
export class NtFourteenComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
}
