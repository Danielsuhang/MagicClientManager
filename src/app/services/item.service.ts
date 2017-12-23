import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Person } from '../model/person'

@Injectable()
export class ItemService {
   items: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) {
  }
  getData() {
    this.items = this.firebase.list('items');
    return this.items;
  }
  addItems(person: any) {
    this.items.push(person);
  }


}
