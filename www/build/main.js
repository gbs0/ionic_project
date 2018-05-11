webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_db__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LibraryPage = /** @class */ (function () {
    function LibraryPage() {
    }
    LibraryPage.prototype.ngOnInit = function () {
        this.dbCollection = __WEBPACK_IMPORTED_MODULE_1__data_db__["db"];
    };
    LibraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-library',template:/*ion-inline-start:"/home/ubuntu/workspace/blankApp/src/pages/library/library.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Biblioteca</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3 text-center>Selecione uma das opções abaixo</h3>\n  <ion-list>\n    <button ion-item *ngFor="let dbGroup of dbCollection">\n      <ion-icon [name]="dbGroup.icon" item-left></ion-icon>\n      <h2>{{ dbGroup.category }}</h2>\n      <p>{{ dbGroup.db.length }} Quotes</p>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/blankApp/src/pages/library/library.html"*/,
        })
    ], LibraryPage);
    return LibraryPage;
}());

//# sourceMappingURL=library.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/favorites/favorites.module": [
		275,
		1
	],
	"../pages/library/library.module": [
		274,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites_favorites__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.mainPage = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.favoritesPage = __WEBPACK_IMPORTED_MODULE_2__favorites_favorites__["a" /* FavoritesPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',
            template: "\n        <ion-tabs>\n            <ion-tab [root]=\"mainPage\" tabTitle=\"Home\" tabIcon=\"bookmark\"></ion-tab>\n            <ion-tab [root]=\"favoritesPage\" tabTitle=\"Favorites\" tabIcon=\"book\"></ion-tab>\n        </ion-tabs>\n    "
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_users__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favorites_favorites__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__library_library__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Importing Ionic and Angular components */



/** Importing App pages */



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    HomePage.prototype.onGoToUsers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__users_users__["a" /* UsersPage */]);
    };
    HomePage.prototype.onGoToFavorites = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__favorites_favorites__["a" /* FavoritesPage */]);
    };
    /** onGoToLoading() {
      let loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 3000
      });
      loader.present();
  
    } */
    HomePage.prototype.onGoToLibrary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__library_library__["a" /* LibraryPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ubuntu/workspace/blankApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Basis\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- Trigger loading function and go to users page -->\n  <!-- <button ion-button (click)="trigLoading() onGoToUsers()">Users</button> -->\n  \n  <!-- Go to users page -->\n  <button ion-button (click)="onGoToUsers()">Users</button>\n  \n  <button ion-button color=\'green\' (click)="onGoToLibrary()" icon-start>\n      <ion-icon name=\'paw\'></ion-icon>Favoritos</button>\n      \n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/blankApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersPage = /** @class */ (function () {
    function UsersPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    UsersPage.prototype.onLoadUser = function (name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserPage */], { UserName: name });
    };
    UsersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-users',template:/*ion-inline-start:"/home/ubuntu/workspace/blankApp/src/pages/users/users.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Users</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button (click)="onLoadUser(\'Isadora\')">User - Isadora</button>\n  <hr>\n  <button ion-button (click)="onLoadUser(\'Aline\')">User - Aline</button>\n</ion-content>\n\n<ion-footer no-padding>\n    <footer>Copyright &copy; Gabriel Schiavo</footer>\n</ion-footer>\n'/*ion-inline-end:"/home/ubuntu/workspace/blankApp/src/pages/users/users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], UsersPage);
    return UsersPage;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserPage = /** @class */ (function () {
    function UserPage(navParams, navCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
    }
    UserPage.prototype.ngOnInit = function () {
        this.name = this.navParams.get('userName');
    };
    UserPage.prototype.onGoBack = function () {
        // this.navCtrl.pop(); To go back one page ('/cd ..')
        this.navCtrl.popToRoot();
    };
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/ubuntu/workspace/blankApp/src/pages/users/user/user.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ name }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <p>Olá, eu sou {{ name }}</p>\n    <button ion-button (click)="onGoBack()">Confirm</button>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/blankApp/src/pages/users/user/user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_users_users__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_users_user_user__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_library_library__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_users_users__["a" /* UsersPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_users_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_library_library__["a" /* LibraryPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/library/library.module#LibraryPageModule', name: 'LibraryPage', segment: 'library', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_users_users__["a" /* UsersPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_users_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_library_library__["a" /* LibraryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ubuntu/workspace/blankApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ubuntu/workspace/blankApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ([
    {
        category: 'inpiracional',
        db: [
            {
                id: '1',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            },
            {
                id: '2',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            },
            {
                id: '3',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            },
            {
                id: '4',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            },
            {
                id: '5',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            }
        ],
        icon: 'brush'
    },
    {
        category: 'inpiracional',
        db: [
            {
                id: '6',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            },
            {
                id: '7',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            },
            {
                id: '8',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            },
            {
                id: '9',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            },
            {
                id: '10',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            }
        ],
        icon: 'brush'
    },
    {
        category: 'inpiracional',
        db: [
            {
                id: '11',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            },
            {
                id: '12',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            },
            {
                id: '13',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            },
            {
                id: '14',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            },
            {
                id: '15',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            }
        ],
        icon: 'brush'
    },
    {
        category: 'inpiracional',
        db: [
            {
                id: '16',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            },
            {
                id: '17',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            },
            {
                id: '18',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            },
            {
                id: '19',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            },
            {
                id: '20',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            }
        ],
        icon: 'brush'
    },
    {
        category: 'inpiracional',
        db: [
            {
                id: '21',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            },
            {
                id: '22',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            },
            {
                id: '23',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            },
            {
                id: '24',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            },
            {
                id: '25',
                person: 'XYZ',
                text: 'Lorem Ipslum'
            }
        ]
    }
]);
//# sourceMappingURL=db.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FavoritesPage = /** @class */ (function () {
    function FavoritesPage() {
    }
    FavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesPage');
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"/home/ubuntu/workspace/blankApp/src/pages/favorites/favorites.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Social Card</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg social-cards">\n\n<ion-card>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/imgs/female-25.JPG">\n    </ion-avatar>\n    <h2>Marty McFly</h2>\n    <p>November 5, 1955</p>\n  </ion-item>\n\n  <img src="assets/img/advance-card-bttf.png">\n\n  <ion-card-content>\n    <p>Lindos Filhotes de Bulldog Francês, disponíveis nas cores creme e tigrado.</p>\n  </ion-card-content>\n\n  <ion-row>\n    <ion-col>\n      <button ion-button color="primary" clear small icon-start>\n        <ion-icon name=\'thumbs-up\'></ion-icon>\n        12 Likes\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button color="primary" clear small icon-start>\n        <ion-icon name=\'text\'></ion-icon>\n        4 Comments\n      </button>\n    </ion-col>\n    <ion-col align-self-center text-center>\n      <ion-note>\n        20min ago\n      </ion-note>\n    </ion-col>\n  </ion-row>\n\n</ion-card>\n\n\n<ion-card>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/sarah-avatar.png.jpeg">\n    </ion-avatar>\n    <h2>Sarah Connor</h2>\n    <p>May 12, 1984</p>\n  </ion-item>\n\n  <img src="assets/img/advance-card-tmntr.jpg">\n\n  <ion-card-content>\n    <p>I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.</p>\n  </ion-card-content>\n\n  <ion-row>\n    <ion-col>\n      <button ion-button color="primary" clear small icon-start>\n        <ion-icon name=\'thumbs-up\'></ion-icon>\n        30 Likes\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button color="primary" clear small icon-start>\n        <ion-icon name=\'text\'></ion-icon>\n        64 Comments\n      </button>\n    </ion-col>\n    <ion-col align-self-center text-center>\n      <ion-note>\n        2hr ago\n      </ion-note>\n    </ion-col>\n  </ion-row>\n\n</ion-card>\n\n\n<ion-card>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/ian-avatar.png">\n    </ion-avatar>\n    <h2>Dr. Ian Malcolm</h2>\n    <p>June 28, 1990</p>\n  </ion-item>\n\n  <img src="assets/img/advance-card-jp.jpg">\n\n  <ion-card-content>\n    <p>Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.</p>\n  </ion-card-content>\n\n  <ion-row>\n    <ion-col>\n      <button ion-button color="primary" clear small icon-start>\n        <ion-icon name=\'thumbs-up\'></ion-icon>\n        46 Likes\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button color="primary" clear small icon-start>\n        <ion-icon name=\'text\'></ion-icon>\n        66 Comments\n      </button>\n    </ion-col>\n    <ion-col align-self-center text-center>\n      <ion-note>\n        2d ago\n      </ion-note>\n    </ion-col>\n  </ion-row>\n\n</ion-card>\n\n\n</ion-content>\n\n<style>\n  .social-cards ion-col {\n    padding: 0;\n  }\n</style>'/*ion-inline-end:"/home/ubuntu/workspace/blankApp/src/pages/favorites/favorites.html"*/,
        })
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map