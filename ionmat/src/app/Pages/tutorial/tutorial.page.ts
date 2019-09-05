import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss']
})
export class TutorialPage implements OnInit {
  next = false;
  @ViewChild('slides', { static: true }) slides: IonSlides;
  constructor() {}

  ngOnInit() {}
  prnt() {
    console.log(this.slides);
  }
}
