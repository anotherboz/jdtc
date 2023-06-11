import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { AutoRouteService } from 'src/app/services/auto-route.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(public router: AutoRouteService) {}

  ngOnInit(): void {
    timer(2500).subscribe(() => this.router.next());
  }
}
