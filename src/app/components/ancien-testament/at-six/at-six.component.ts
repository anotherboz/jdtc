import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../ui/check-list/check-list.component';

@Component({
  selector: 'app-at-six',
  templateUrl: './at-six.component.html',
  styleUrls: ['./at-six.component.scss']
})
export class AtSixComponent implements OnInit {
    @Output() next = new EventEmitter<number>()

    constructor() { }

    ngOnInit(): void {
    }
  }
