import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Hellen Keller', 'The best and most beautiful thing in this world cannot be seen or even heard but must be felt with the heart.', 'admin', new Date(1997, 5, 6)),
    new Quote(2, 'Ashton Kutcher', 'Dont settle for what life gives you,make life better and build something.', 'admin', new Date(2000, 9, 8)),
    new Quote(3, 'Albert Einstein', 'In the middle of difficulties lies opportunity', 'admin', new Date(2015, 4, 29)),

  ]
  constructor() { }

  ngOnInit() {
  }

}
