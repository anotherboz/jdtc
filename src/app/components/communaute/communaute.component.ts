import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-communaute',
  templateUrl: './communaute.component.html',
  styleUrls: ['./communaute.component.scss'],
})
export class CommunauteComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {
    timer(5000).subscribe(() => this.router.navigate(['menu']));
  }
}
