import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css']
})
export class EstimateComponent implements OnInit {
    sliderVal: number;
  tobacco: number;
  covered: number;
  plat: number;
  gold: number;
  silver: number;
  bronze: number;

  constructor() { }

  ngOnInit() {
    this.sliderVal = 700000;
    this.covered = 2;
    this.tobacco = 0;
  }
  calculate() {
     var plat = Math.round(114.4 + (16.02 * this.tobacco) + (5.137 * this.covered) + (0.00004702 * this.sliderVal ));
     this.plat = plat;

     var gold = Math.round(62.4 + (16.02 * this.tobacco) + (5.137 * this.covered) + (0.00004702 * this.sliderVal ));
     this.gold = gold;

     var silver = Math.round(23.4 + (16.02 * this.tobacco) + (5.137 * this.covered) + (0.00004742 * this.sliderVal ));
     this.silver = silver;

     var bronze = Math.round(-2.601 + (16.02 * this.tobacco) + (5.137 * this.covered) + (0.00004742 * this.sliderVal ));
     this.bronze = bronze;
   }
//                Estimate Std. Error t value Pr(>|t|)    
// (Intercept)  -2.601e+00  8.956e-02  -29.04   <2e-16 ***
// X_tobYes      1.602e+01  3.472e-02  461.35   <2e-16 ***
// X_insured     5.137e+00  1.591e-02  322.91   <2e-16 ***
// X_optionally  4.742e-05  1.162e-07  407.95   <2e-16 ***

}
