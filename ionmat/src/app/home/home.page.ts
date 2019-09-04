import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { AlertController, LoadingController } from '@ionic/angular';
import { MydataService } from '../mydata.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  data: any[] = [];
  constructor(
    private alert: AlertController,
    private dt: MydataService,
    public loadingCtrl: LoadingController
  ) {}
  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });

    await alert.present();
  }
  loading() {
    this.loadingCtrl
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
    this.loading();
    this.dt.getUsers().subscribe(n => {
      this.data = Array.of(...n);
      console.log(this.data);
      this.loadingCtrl.dismiss();
    });
  }
}
