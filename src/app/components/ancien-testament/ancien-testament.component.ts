import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ancien-testament',
  templateUrl: './ancien-testament.component.html',
  styleUrls: ['./ancien-testament.component.scss']
})
export class AncienTestamentComponent implements OnInit {
  score = 0;
  step = 0;
  stepCount = 10;

  constructor() { }

  ngOnInit(): void {
  }

  next(point?: number){
    if (point) {
      this.score += point;
    }
    this.step++;
  }

}
