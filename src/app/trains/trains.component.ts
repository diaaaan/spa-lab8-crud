import { Component, OnInit } from '@angular/core';
import { Train } from '../train';
import { TRAINS } from '../train-list';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {

  trains = TRAINS;
  trainCreator: string;
  trainId: number;
  trainNumber: number;
  showType: string;

  constructor() { }

  ngOnInit() {
    this.trainCreator = '';
    this.trainId = 4;
  }

  addTrain(): void {

    if (this.trainCreator.trim().length === 0) {
      return;
    }

    this.trains.push({
      id: this.trainId, 
      creator: this.trainCreator,
      number: this.trainNumber,
      status: 1, editing: false,
      traintype: this.trainNumber[0]
    })

    this.trainCreator = '';
    this.trainId++;
 
    const element = this.trainNumber[0];
    console.log(element);
      
  }

  deleteTrain(id: number): void {
    this.trains = this.trains.filter(train => train.id !== id);
  }

  editTrain(train: Train): void {
    train.editing = true;
  }

  detectType(train: Train) {
  if (train.traintype == 8) {
    this.showType = ' index 8';
  } 
  else
    this.showType = 'other';
 } 

  } 

