import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {
  @Output() validate = new EventEmitter<{}>();
  validated = false;

  constructor() { }

  ngOnInit(): void {
  }

  doValidate(): void {
    this.validated = true;
    this.validate.emit();
  }
}
