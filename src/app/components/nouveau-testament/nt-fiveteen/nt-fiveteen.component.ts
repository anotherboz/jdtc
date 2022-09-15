import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nt-fiveteen',
  templateUrl: './nt-fiveteen.component.html',
  styleUrls: ['./nt-fiveteen.component.scss'],
})
export class NtFiveteenComponent implements OnInit {
  @Output() next = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
}
