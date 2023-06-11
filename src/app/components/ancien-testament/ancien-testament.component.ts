import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatsService } from 'src/app/services/stats.service';
//import { slideInRight, slideOutLeft } from '../ui/fade.animation';
import {
  slideInRightOnEnterAnimation,
  slideOutLeftOnLeaveAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-ancien-testament',
  templateUrl: './ancien-testament.component.html',
  styleUrls: ['./ancien-testament.component.scss'],
  animations: [
    slideInRightOnEnterAnimation({ delay: 1000 }),
    slideOutLeftOnLeaveAnimation(),
  ],
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
      this.stats.ancienTestament = this.score;
      this.router.navigate(['menu']);
    }
  }
}
