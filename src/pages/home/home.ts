/** Importing Ionic and Angular components */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

/** Importing App pages */
import { UsersPage } from "../users/users";
import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController) 
    {}
  
  onGoToUsers() {
    this.navCtrl.push(UsersPage);
  }
  
  onGoToFavorites() {
    this.navCtrl.push(FavoritesPage);
  }
  
  /** onGoToLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();

  } */
  
  onGoToLibrary() {
    this.navCtrl.push(LibraryPage);
  }
}
