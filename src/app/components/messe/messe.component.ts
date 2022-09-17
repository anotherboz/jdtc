import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-messe',
  templateUrl: './messe.component.html',
  styleUrls: ['./messe.component.scss'],
})
export class MesseComponent implements OnInit {
  score = 0;
  step = 0;
  stepCount = 5;

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
