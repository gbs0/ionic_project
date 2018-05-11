import { Component, OnInit } from '@angular/core';

import { Db } from "../../data/db.interface";
import { db } from "../../data/db";

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  dbCollection: {category: string, db: Db[], icon:string}[];

  ngOnInit() {
    this.dbCollection = db;
  }
}
