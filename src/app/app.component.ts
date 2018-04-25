import {Component, ViewEncapsulation} from '@angular/core';
import { MatSlider } from '@angular/material';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  bfVal = 25;
  bfMin = 0;
  bfMax = 60;
  step = 0.1;
  thumbLabel = true;
  // Lean Mass Value
  lmVal = 75;
  lmMin = 40;
  lmMax = 100;
  // Bone Mass Value
  bmVal = 1;
  bmMin = 1;
  bmMax = 5;

  onLeanInputChange(event: any) {
    this.lmVal = event.target.value;
    // Rounding fixes some floating point math issues
    this.bfVal = Math.round((100 - this.lmVal) * 10) / 10;
    console.log(this.bfVal);
  }
  onBodyInputChange(event: any) {
    this.bfVal = event.target.value;
    // Rounding fixes some floating point math issues
    this.lmVal = Math.round((100 - this.bfVal) * 10) / 10;
    console.log(this.lmVal);
  }
}
