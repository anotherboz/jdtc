import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-saints',
  templateUrl: './saints.component.html',
  styleUrls: ['./saints.component.scss'],
})
export class SaintsComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {
    timer(5000).subscribe(() => this.router.navigate(['menu']));
  }
}
