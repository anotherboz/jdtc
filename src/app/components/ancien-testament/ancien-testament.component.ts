import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-ancien-testament',
  templateUrl: './ancien-testament.component.html',
  styleUrls: ['./ancien-testament.component.scss'],
})
export class AncienTestamentComponent implements OnInit {
  score = 0;
  step = 0;
  stepCount = 8;

  constructor(private router: Router, private stats: StatsService) {}

  ngOnInit(): void {}

  next(point?: number) {
    if (point) {
      this.score += point;
    }
    this.step++;
    if (this.step > this.stepCount) {
      this.stats.messe = this.score;
      this.router.navigate(['menu']);
    }
  }
}
