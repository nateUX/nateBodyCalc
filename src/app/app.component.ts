import {Component, ViewEncapsulation} from '@angular/core';
import { MatSlider } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class AppComponent {
  title = 'Body Calc';
  // autoTicks = false;
  // disabled = false;
  // invert = false;
  // max = 100;
  // min = 0;
  // showTicks = false;
  // step = 1;
  // thumbLabel = false;
  value = 0;
  // Body Fat Parameters
  bfVal = 22.4;
  bfMin = 10;
  bfMax = 30;
  step = .1;
  thumbLabel = true;
  // Lean Mass Value
  lmVal = 77.6;
  lmMin = 70;
  lmMax = 90;
  // Bone Mass Value
  bmVal = 0;
  bmMin = 0;
  bmMax = 5;
  // vertical = false;
  onLeanInputChange(event: any) {
    this.lmVal = event.value;
    this.bfVal = 100 - this.lmVal;
  }
  onBodyInputChange(event: any) {
    this.bfVal = event.value;
    this.lmVal = 100 - this.bfVal;
  }
}
