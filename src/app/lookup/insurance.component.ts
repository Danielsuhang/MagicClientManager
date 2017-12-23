import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {ItemService} from './../services/item.service';
import {AngularFireList} from 'angularfire2/database';
import { Person } from './../model/person';


import { Observable }  from 'rxjs/Observable';

 import {  AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css'],
  providers: [Person]
})
export class InsuranceComponent implements OnInit {
  firstname: string;
  lastname: string;
  middle: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  DOB: string;
  items: Person[];
  filtered: any[];
  counter: number;
  id: string;

  found: boolean = false;
  notFound: boolean = false;

  fullname: string;

 

  ngOnInit() {
    this.filtered = [];
    this.itemService.getData().valueChanges().subscribe(val => {
      this.items = val;
      console.log("done!")
      console.log(this.items)
    });
  }
  constructor(private itemService: ItemService) {

   }
  onSubmit() { 
    if (this.firstname == null && this.lastname == null && this.gender == null 
    && this.address == null && this.city == null && this.state == null 
    && this.DOB == null && this.id == null || (this.firstname == "" && this.lastname == "" && this.gender == "" 
    && this.address == "" && this.city == "" && this.state == "" 
    && this.DOB == "" && this.id == "")) {
      console.log("Please enter at least one field");
      return;
    }
    this.filtered = [];
    var completeName: boolean = false;

    if (this.firstname != null && this.firstname != "" && this.lastname != null && this.lastname != "") {
      if (this.middle != null) {
        this.fullname = this.lastname.trim().toUpperCase().concat("," + this.firstname.trim().toUpperCase() + " " + this.middle.trim().toUpperCase());
      } else {
        this.fullname = this.lastname.trim().toUpperCase().concat("," + this.firstname.trim().toUpperCase());
      }   
      completeName = true;
    }

      this.counter = 0;
      
      
      for (let items of this.items) {
          var oneMatch = false;
          if (items.sex != null && this.gender != null && this.gender != items.sex) continue;
          if (items.id != null && this.id != null && this.id != '' && this.id != items.id) continue;  
          if (items.id != null && this.id != null && this.id != '') oneMatch = true;
          if (items.sex != null && this.gender != null && this.gender != "") oneMatch = true;
          //Full name check
          //If form contains an item, and the user provided some sort of data for this field, then check 
              //if its equal to the form, if not equal, this is NOT a match

              //Must use search for this approach
          if (items.name != null && completeName && items.name.toUpperCase().trim().search(this.fullname.trim().toUpperCase()) == -1) {
            continue;
          }
          
          else if (items.name != null && !completeName) {
            //Some problem with this logic, but pretty airtight
            //Checks if firstname or lastname is contained at all in the name
            if (this.lastname != null && this.lastname != "" && items.name.toUpperCase().trim().substring(0, this.lastname.length).search(this.lastname.toUpperCase()) == -1) {
              continue;
            }
            if (this.firstname != null && this.firstname != "" && items.name.toUpperCase().trim().search(this.firstname.toUpperCase()) == -1) {
              continue;
            }
            
            //Doesn't check middle name
            if (this.firstname != null && this.firstname != "") {
              oneMatch = true;
            }
            if (this.lastname != null && this.lastname != "") {
              oneMatch = true;
            }
            
            
            
          }


          if (items.name != null && this.fullname != null && this.fullname != "") {
            oneMatch = true;
          }
          //Address check
          if (items.address != null && this.address != null && this.address != "" && items.address.toUpperCase().trim().search(this.address.toUpperCase().trim()) == -1) {
            continue;
          }
          //We need to make sure that in the user provides no checkable forms, we don't count this
          if (items.address != null && this.address != null && this.address != "") {
            oneMatch = true;
          }

          //City Check
          if (items.city != null && this.city != null && this.city != "" && items.city.toUpperCase().trim().search(this.city.toUpperCase().trim()) == -1) {
            continue;
          }
          if (items.city != null && this.city != null && this.city != "") {
            oneMatch = true;
          }

          if (items.DOB != null && this.DOB != null && this.DOB != "" && items.DOB.search(this.DOB) == -1) {
            continue; 
          }
          if (items.DOB != null && this.DOB != null && this.DOB != "") oneMatch = true;

          if (items.state != null && this.state != null && this.state != "" && items.state.trim().toUpperCase().search(this.state.toUpperCase().trim()) == -1) {
            continue;
          }
          if (items.state != null && this.state != null && this.state != "") {
            oneMatch = true;
          }

          if (!oneMatch) continue;  //At least one value must match
          this.counter++;
          this.filtered.push(items);
      }

    


    if (this.filtered.length == 0) {
      this.found = false;
      this.notFound = true;
    }
    else {
      this.found = true;
      this.notFound = false;
    }
  }
  addItem(person: any) {
    console.log("works!")
    this.itemService.addItems(person)
  }
}
