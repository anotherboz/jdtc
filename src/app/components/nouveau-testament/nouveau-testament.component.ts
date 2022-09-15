import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-nouveau-testament',
  templateUrl: './nouveau-testament.component.html',
  styleUrls: ['./nouveau-testament.component.scss']
})
export class NouveauTestamentComponent implements OnInit {
  score = 0;
  step = 0;
  stepCount = 8;

  constructor(private router: Router, private stats: StatsService) { }

  ngOnInit(): void {
  }

  next(point?: number){
    if (point) {
      this.score += point;
    }
    this.step++;
    if (this.step > 8) {
      this.stats.ancienTestament = this.score;
      this.router.navigate(['menu']);
    }
  }
}
