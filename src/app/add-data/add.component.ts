import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, Validators} from '@angular/forms';
import {AngularFireList} from 'angularfire2/database';
import { Person } from './../model/person';

import {ItemService} from './../services/item.service';

@Component({
  selector: 'app-about',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [Person]
})
export class AddComponent implements OnInit {

  constructor(private itemService: ItemService) { 
    this.predictCost = false;
    this.success = false;
    this.incomplete = false;
  }
    items: Person[]; //Our Database

    //Max id in the set
    maxID: number;

    //Variables for a person
    ANNUAL_INCOME: number;
    BRONZE: number;
    // DOB: string;
    EMPLOYMENT_STATUS: string;
    GOLD: number;
    // HEIGHT: number;
    // MARITAL_STATUS: string;
    OPTIONAL_INSURED: number;
    PEOPLE_COVERED: number;
    PLATINUM: number;
    PURCHASED: string;
    SILVER: number;
    TOBACCO: string;
    WEIGHT: number;
    address: string;
    city: string;
    // collection_id: string;
    email: string;
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    gender: string;
    state: string;
    //--- End Variables

    //Input variables 
    firstname: string;
    lastname: string;
    middle: string;

    //Boolean to estimate bronze/silver/gold/platinum scores
    predictCost: boolean;

    success: boolean;
    incomplete: boolean;

    //ID delete variable
    deleteID: string;


  ngOnInit() {
    this.maxID = 0;
    this.itemService.getData().valueChanges().subscribe(val => {
      this.items = val;
      console.log("done!")
      console.log(this.items)
      
      for (let p of this.items) {
        if (p.id != undefined && p.id != null) {
          this.maxID = Math.max(this.maxID, Number(p.id));
        }
      }
    });
    
    
  }
  onSubmit() {
    var person: Person = {};
    if ((this.gender != undefined && this.gender != '') 
    && (this.firstname != undefined && this.firstname != '') 
    && (this.lastname != undefined && this.lastname != '')) {
      if (this.middle != undefined && this.middle != '') {
        person.name = this.lastname.trim().toUpperCase().concat("," + this.firstname.trim().toUpperCase() + " " + this.middle.trim().toUpperCase());
      }
      else {
        person.name = this.lastname.trim().toUpperCase().concat("," + this.firstname.trim().toUpperCase());
      }
      person.sex = this.gender;
      this.gender = null;
      
      if (this.address != undefined && this.address != '') {
        person.address = this.address;
        this.address = ''; //Reset value
      }
      if (this.ANNUAL_INCOME != undefined && this.ANNUAL_INCOME != null) {
        person.ANNUAL_INCOME = this.ANNUAL_INCOME;
        this.ANNUAL_INCOME = null; //Reset value
      }
      if (this.city != undefined && this.city != '') {
        person.city = this.city;
      }
      if (this.BRONZE != undefined && this.BRONZE != null) {
        person.BRONZE = this.BRONZE;
        this.BRONZE = null; //Reset 
      }
      if (this.SILVER != undefined && this.SILVER != null) {
        person.SILVER = this.SILVER;
        this.SILVER = null; //reset
      }
      if (this.GOLD != undefined && this.GOLD != null) {
        person.GOLD = this.GOLD;
        this.GOLD = null;
      }
      if (this.PLATINUM != undefined && this.PLATINUM != null) {
        person.PLATINUM = this.PLATINUM;
        this.PLATINUM = null; //Reset
      }
      if (this.OPTIONAL_INSURED != undefined) {
        person.OPTIONAL_INSURED = this.OPTIONAL_INSURED;
      }
      
      this.success = true;
      this.incomplete = false;
      person.id = String(this.maxID + 1);
      console.log(person);
      this.itemService.addItems(person);
    }
    else {
      this.success = false;
      this.incomplete = true;
      console.log("Incomplete Form!")
    }

  }

}
