

# Welcome to my Ionic project on Github using Cloud9 IDE!

## Cloud9 Instructions:

This chat example showcases how to use `socket.io` with a static `express` server.

###### Running the Node.js server (Using socket.io)

1) Open `server.js` and start the app by clicking on the "Run" button in the top menu.

2) Alternatively you can launch the app from the Terminal:

    $ node server.js

Once the server is running, open the project in the shape of 'https://projectname-username.c9users.io/'. As you enter your name, watch the Users list (on the left) update. Once you press Enter or Send, the message is shared with all connected clients.

## Ionic 2/3 Instructions:

###### Running Ionic Server:
    < Trought the shell interface >
    - ionic serve -p $PORT -r 8081
    
    
    < To preview the aplicattion, shell must return ´dev server running: http://localhost:8080/´ >
    - Click on ´http://localhost:8080/´ and open the preview.
    
###### Init a new project on Ionic:
  
• Default for init a Ionic 2/3 project [Through shell interface]:

    
    - ionic start 'PROJECT_NAME' --type=ionic-angular

• Create a project with <Tabs navigation> template (Ionic v2)


    - ionic start 'PROJECT_NAME' tabs --v2

• Create a project with <Sidemenu navigation> template (Ionic v2)

    - ionic start 'PROJECT_NAME' sidemenu --v2

• Create a <Blank project> template (Ionic v2)


    - ionic start 'PROJECT_NAME' blank --v2
    
• Create a project from a previously made <tutorial> (Ionic v2)

    - ionic start 'PROJECT_NAME' tutorial --v2


    
###### Creating new App Page:
    < 1. (Automatic creation): Navigate to your App Pages directory, and trought console run: >
    - ionic generate page 'Page name'    

    < 2. Declare, import and add the page parameters in your main 'app.module.ts' script, located in the 
    'src > app > app.module.ts' >
    - import { 'Page Name' } from '../pages/'page_folder'/page_file';
    
    < 2.1 In the @NgModule section inside 'app.module.ts', add the Page Name in the declarations  >
    - @NgModule({
        declarations: [
        ..,
        'PageName'
        ]
    
    < 2.2 In the Bootstrap section, inside 'app.module.ts', add the Page Name in the declarations  >
    - bootstrap: [IonicApp],
        entryComponents: [
        ..,
        'PageName'
        ]
    
    
###### Navigate foward trough App Pages:

    1. In the major page, import the 'NavController' from Ionic.
    
    
    - import { NavController } from 'ionic-angular';

    2. After, declare the path from your specific destination page.
    
    
    - import { 'Page Name' } from '../page_folder/page_file';
    
    3. On 'pageMainClass' section, declare the private constructor named 'NavCtrl' >
    
    
    - constructor (private navCtrl: NavController) {}
    
    4. On 'export class [PageName]' section, import the function that are declared in the HTML as a 
    click listener and a navCtrl set to 'push'.
    < Example function: 
    - onLoadUser(name: string){
        this.navCtrl.push(UserPage, {UserName: name});
        }
    >
    
###### Navigate towards or to root page:

    1. After declare the controllers and the path from your specific destination page.
    
     - import { 'Page Name' } from '../page_folder/page_file';
     &&&
     - constructor (private navCtrl: NavController) {}
    
    2. On Ionic, we have multiple functions that can return to a root or a specific page.
    
     - this.navCtrl.pop(); // To go back one page ('/cd ..')
     or
     - this.navCtrl.popToRoot(); // To return to the root page (Example: 'HomePage')
    
    ?. On 'export class [PageName]' section, import the function that are declared in the HTML as a 
    click listener.
    < Example function: 
    - onLoadUser(name: string){
        this.navCtrl.push(UserPage, {UserName: name});
        }
    >

###### Simple syntax of the NavParams to cicle between the app Pages:

    1. In your specific app page typescript, declare in the 'export Class 'Your Page Name':
    
     - 'yourVarName' = 'PagaNamefromImport';
       < Example function: {
     - usrPage = UsersPage;
        }>

    2. In the HTML of the main page, use '[]' to set a Ionic function propriety.
    
     - <button ion-button [navParams]="YourClassName">'Button Name'</button>  
      < Example function: {
     - <button ion-button [navPush]="usrPage">Users</button>
        }>
    
    3. To go back, in the HTML page add another button called 'Go Back' and add a Nav Parameter 'navPop'
    
    - <button ion-button navPop>'Button Name'</button>
    < Example function: {
    - <button ion-button navPop>Go Back</button>
    }>

###### Creating 'Tabs' navigation bottom bar:

    1. In the 'pages' folder directory, create a 'tabs' folder;

    2. In the 'tabs' directory, create a new Typescript file 'tabs.ts';
    
    3. In the typescript file, add this syntax:
    
    - import { Component } from '@angular/core';
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
    
    4. After, at 'app.module.ts', we must import the 'tabs' page from our directory:
    
    - import { TabsPage } from '../pages/tabs/tabs';
      
      &&&
    
    Declare the 'tabs' instance at @NgModule and at bootstrap entryComponents;
    
    5. Now, in 'app.component.ts', import the 'tabs' page from our directory:
    
    - import { TabsPage } from '../pages/tabs/tabs';
      
      &&&
    
    At 'export class MyApp {', declare the 'tabs' instance at:
    - rootPage:any = TabsPage;
    
     
    

    
    
    
    
    
    