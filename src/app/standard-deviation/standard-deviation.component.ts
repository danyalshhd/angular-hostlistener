import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-standard-deviation',
  templateUrl: './standard-deviation.component.html',
  styleUrls: ['./standard-deviation.component.css']
})
export class StandardDeviationComponent implements OnInit {

  textToCalculate: string;
  calculatedText: number;

  constructor() {
  }

  ngOnInit() {

  }

  showText(item) {
    this.calculatedText = item;
  }
}
