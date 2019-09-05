import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Share',
      buttons: [{
        text: 'Copy',
        icon: 'copy',
        handler: () => {
          console.log('Copy clicked');
        }
      }, {
        text: 'Email',
        icon: 'mail',
        handler: () => {
          console.log('Share clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  ngOnInit() {
  }

}
