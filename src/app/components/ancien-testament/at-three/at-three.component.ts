import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-at-three',
  templateUrl: './at-three.component.html',
  styleUrls: ['./at-three.component.scss']
})
export class AtThreeComponent implements OnInit {
  @Output() next = new EventEmitter<number>()
  @ViewChild('#inp') input?: ElementRef;

  score?: number = undefined;

  constructor() { }

  ngOnInit(): void {
    this.input?.nativeElement.focus();
  }
}
