import { Component, OnInit } from '@angular/core';
import { AutoRouteService } from 'src/app/services/auto-route.service';
import { Stats, StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  stats: Stats;

  constructor(public route: AutoRouteService, stats: StatsService) {
    this.stats = stats.stats;
  }

  ngOnInit(): void {
  }

}
