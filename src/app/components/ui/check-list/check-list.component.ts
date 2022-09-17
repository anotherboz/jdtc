import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, timeout } from 'rxjs';

export interface Question {
  label: string;
  attended: boolean;
  actual?: boolean;
}

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss'],
})
export class CheckListComponent implements OnInit, OnChanges {
  @Input() questions?: Question[];
  @Output() score = new EventEmitter<number>();
  result?: number;
  group?: FormGroup;

  get list() {
    return this.group?.get('list') as FormArray;
  }
  lock = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.questions === undefined) {
      return;
    }
    this.questions.forEach((q) => (q.actual = q.actual || false));
    this.group = this.fb.group({
      list: this.fb.array(this.questions.map((q) => this.fb.control(q.actual))),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['lock']?.currentValue) {
      this.list.controls.forEach((c) => c.disable());
    }
  }

  validate(): void {
    const list = this.list.getRawValue() as boolean[];
    const success = list.every(
      (v: boolean, i) => v === this.questions![i].attended
    );

    if (success) {
      this.result = 1;
    } else {
      this.result = 0;
    }
    setTimeout(
      () =>
        window.scroll({
          top: 400,
          left: 0,
          behavior: 'smooth',
        }),
      200
    );
    this.score.emit(this.result);
    this.lock = true;
  }
}
