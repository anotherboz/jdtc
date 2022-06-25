import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  stats = {
    ancienTestament: {
      point: 5
    },
    nouveauTestament: {
      point: undefined
    },
    messe: {
      point: undefined
    },
    organisation: {
      point: undefined
    },
    communaute: {
      point: undefined
    },
    histoire: {
      point: undefined
    },
    saints: {
      point: undefined
    },
    autreReligions: {
      point: undefined
    },
  }

  constructor() { }

  ngOnInit(): void {
  }

}
