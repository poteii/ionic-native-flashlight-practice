import { Flashlight } from '@ionic-native/flashlight';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isOn: boolean;

  constructor(private flashlight: Flashlight, private platform: Platform) {
    //wait ionic app to run
    this.platform.ready().then(
      () => {
        this.updateFlashlightStatus();
      }
    )
  }

  switchOn() {
    this.flashlight.switchOn();
  }

  switchOff() {
    this.flashlight.switchOff();
  }

  toggle() {
    this.flashlight.toggle();
    this.updateFlashlightStatus();
  }

  updateFlashlightStatus() {
    this.isOn = this.flashlight.isSwitchedOn();
  }

}
