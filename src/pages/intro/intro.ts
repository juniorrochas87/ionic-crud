import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ConfigProvider } from '../../providers/config/config';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
  providers: [
    ConfigProvider
  ]
})
export class IntroPage {
  rootPage: typeof IntroPage;

  data = { username:"", senha:"" };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public configProvider: ConfigProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }
  goToTabsPage(){
    
    this.navCtrl.push(HomePage) 
  }
   
  saveUser() {
    //this.rootPage = IntroPage;
    this.configProvider.setConfigData(false, this.data.username, this.data.senha);
    //this.navParams.data.ConfigProvider(this.data.username, this.data.senha)
    this.navCtrl.push(HomePage) 
  }

}
