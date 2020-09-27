import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'Simplicity is the ultimate sohistication',
      'Sophie',
      'Frankline',
      new Date(2020, 8, 23)
    ),
    new Quote(
      2,
      'The way to get started is to quit talking and begin doing',
      'Shitandi',
      'Frankline',
      new Date(2020, 7, 20)
    ),
    new Quote(3, 'Love wins', 'Anne', 'Frankline', new Date(2020, 6, 23)),
    new Quote(
      4,
      'Better your best',
      'Mulama',
      'Frankline',
      new Date(2020, 5, 23)
    ),
  ];
  constructor() { }

  ngOnInit() {
  }

}
