import { Component, OnInit } from '@angular/core';
import { Train } from '../train';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {

  train: Train = {
    creator: 'Метровагонмаш',
    number: 12345678,
    status: 0
  };

  constructor() { }

  ngOnInit() {
  }

}
