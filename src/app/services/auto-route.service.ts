import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutoRouteService {
  currentRoute = ''
  constructor(private router: Router) { }

  next(): void {
    switch (this.currentRoute) {
      case '':
        this.currentRoute = 'menu';
        break;
    }
    this.router.navigate([this.currentRoute]);

  }
}
