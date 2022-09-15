import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nt-height',
  templateUrl: './nt-height.component.html',
  styleUrls: ['./nt-height.component.scss'],
})
export class NtHeightComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
}
