import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fadeInDown, slideOutUp } from '../fade.animation';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  animations: [
    trigger('slideOutUp', [transition('* => *', useAnimation(fadeInDown))]),
  ],
})
export class ResultComponent implements OnInit {
  @Input() score?: number;
  @Output() validate = new EventEmitter<void>();
  slideOutUp: any;

  constructor() {}

  ngOnInit(): void {}
}
