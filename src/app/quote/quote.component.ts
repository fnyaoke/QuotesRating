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
  addUpVote(index) {
    this.quotes[index].upvote++;
  }

  addDownVote(index) {
    this.quotes[index].downvote++;
  }
  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  getHighestUpVote(): Quote {
    let highestUpVoteQuote = new Quote(0, '', '', '', new Date());
    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].upvote > highestUpVoteQuote.upvote) {
        highestUpVoteQuote = this.quotes[i];
      }
    }
    if (highestUpVoteQuote.upvote > 0) {
      return highestUpVoteQuote;
    } else{
      return new Quote(0, '', '', '', new Date());
    }
  }
  delete(deleteThis: boolean, index: number) {
    if (deleteThis) {
      let confirmDelete = confirm(
        'Are you sure you want to delete this quote?'
      );
      if (confirmDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuote(newQuote: Quote) {
    newQuote.id = this.quotes.length + 1;
    this.quotes.push(newQuote);
  }
  constructor() { }

  ngOnInit() {
  }

}
