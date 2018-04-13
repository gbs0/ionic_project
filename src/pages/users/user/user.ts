import { Componentn OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage implements OnInit {
  name: string;
  
  constructor(
    private navParams: NavParams,
    private navCtrl: NavController) 
    {}
  
  
  ngOnInit () {
    this.name = this.navParams.get('userName');
  }
  
  onGoBack() {
    // this.navCtrl.pop(); To go back one page ('/cd ..')
    this.navCtrl.popToRoot();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

}