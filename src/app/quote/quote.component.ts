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
      'The best and most beautiful thing in this world cannot be seen or even heard but must be felt with the heart',
      'Hellen Keller',
      'Wangari',
      new Date(1997, 3, 30)
    ),
    new Quote(
      2,
      'Dont settle for what life gives you, make life better and build somthing',
      'Ashton Kutcher',
      'Wangari',
      new Date(2000, 8, 22)
    ),
    new Quote(3, 
      'Love wins', 
      'Anne', 
      'Wangari',
       new Date(2020, 5, 6)),
    new Quote(
      4,
      'In the middle of difficulty lies opportunity',
      'Albert Einstein',
      'Wangari',
      new Date(1905, 5, 2)
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
        ' Hello!Are you sure you want to delete this quote?'
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
