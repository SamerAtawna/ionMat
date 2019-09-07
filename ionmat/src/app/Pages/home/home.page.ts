import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { AlertController, LoadingController } from '@ionic/angular';
import { MydataService } from '../../mydata.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  data: any[] = [];
  searchInput;
  @ViewChild('searchbar', { static: true }) searchbar;

  constructor(
    private alert: AlertController,
    private dt: MydataService,
    public loadingCtrl: LoadingController,
    private splash: SplashScreen
    ) {
this.splash.show();
setTimeout(() => {
  this.splash.hide();
}, 5000);
  }
  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel'],
    });

    await alert.present();
  }
  loading() {
    return this.loadingCtrl
      .create({
        message: 'Please wait...',
        spinner: 'crescent'
      })
      .then(loading => {
        loading.present();
      });
  }
  loadingDismiss() {
    this.loadingCtrl.dismiss();
  }

  getD() {
    this.loading()
      .then(loading => {
        this.dt.getUsers().subscribe(n => {
          this.data = Array.of(...n);
          console.log(this.data);
        });
      })
      .finally(() => {
        this.loadingCtrl.dismiss();
        setTimeout(() => {
          this.searchbar.setFocus();
        }, 500);
      });
  }

  search() {
    console.log(this.searchInput);
    console.log(this.data);
    if (!(this.searchInput === 'undefined')) {
      this.loading()
        .then(loading => {
          if (this.searchInput === '') {
            this.getD();
            return;
          }
          this.dt.getUserByName(this.searchInput).subscribe(d => {
            console.log('d', d);
            if (!(d === undefined)) {
              this.data = Array.of(d);
            } else {
              this.data = [];
              console.log(this.data.length);
            }
          });
        })
        .finally(() => {
          this.loadingCtrl.dismiss();
          setTimeout(() => {
            this.searchbar.setFocus();
          }, 500);
        });
    }
  }
}
