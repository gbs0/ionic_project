import { Component, OnInit } from '@angular/core';

import { Quote } from "../../data/db.interface";
import { quotes } from "../../data/db";

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})

export class LibraryPage implements OnInit {
  quoteCollection: {category: string, quotes: Quote[], icon:string}[];

  ngOnInit() {
    this.quoteCollection = quotes;
    /** console.log('ionViewDidLoad Quotes'); */
  }
}
