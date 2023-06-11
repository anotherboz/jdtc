import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-histoire',
  templateUrl: './histoire.component.html',
  styleUrls: ['./histoire.component.scss'],
})
export class HistoireComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {
    timer(5000).subscribe(() => this.router.navigate(['menu']));
  }
}
