import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from "../users/users";
import { FavoritesPage } from '../favorites/favorites';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  onGoToUsers() {
    this.navCtrl.push(UsersPage);
  }
  
  onGoToFavorites() {
    this.navCtrl.push(FavoritesPage);
  }

}
