import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-autres-religions',
  templateUrl: './autres-religions.component.html',
  styleUrls: ['./autres-religions.component.scss'],
})
export class AutresReligionsComponent {
  constructor(public router: Router) {}

  ngOnInit(): void {
    timer(5000).subscribe(() => this.router.navigate(['menu']));
  }
}
