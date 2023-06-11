import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  slideInRightOnEnterAnimation,
  slideOutLeftOnLeaveAnimation,
} from 'angular-animations';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss'],
  animations: [
    slideInRightOnEnterAnimation({ delay: 1000 }),
    slideOutLeftOnLeaveAnimation(),
  ],
})
export class OrganisationComponent implements OnInit {
  score = 0;
  step = 0;
  stepCount = 7;

  constructor(private router: Router, private stats: StatsService) {}

  ngOnInit(): void {}

  next(point?: number) {
    if (point) {
      this.score += point;
    }
    this.step++;
    if (this.step > this.stepCount) {
      this.stats.organisation = this.score;
      this.router.navigate(['menu']);
    }
  }
}
