import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau-testament',
  templateUrl: './nouveau-testament.component.html',
  styleUrls: ['./nouveau-testament.component.scss']
})
export class NouveauTestamentComponent implements OnInit {
  questions = [{
    label: 'question 1',
    attended: true
  },{
    label: 'question 2',
    attended: true
  },{
    label: 'question 3',
    attended: false
  },{
    label: 'question 4',
    attended: false
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
