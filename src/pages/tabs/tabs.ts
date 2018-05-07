import { Component } from '@angular/core';

import { HomePage } from "../home/home";
import { FavoritesPage } from "../favorites/favorites";

@Component({
    selector: 'page-tabs',
    template: `
        <ion-tabs>
            <ion-tab [root]="mainPage" tabTitle="Home" tabIcon="bookmark"></ion-tab>
            <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="book"></ion-tab>
        </ion-tabs>
    `
})
export class TabsPage {
    mainPage = HomePage;
    favoritesPage = FavoritesPage; 
    
}