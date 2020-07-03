import { Component, OnInit } from '@angular/core';
import { Item } from '../../state/item.model';
import { ItemsQuery } from '../../state/item.query';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-received-items-list',
  templateUrl: './received-items-list.component.html',
  styleUrls: ['./received-items-list.component.css']
})
export class ReceivedItemsListComponent implements OnInit {

  receivedItems$ : Observable<Item[]>;


  constructor(private itemsQuery: ItemsQuery) { }

  ngOnInit() {
    this.receivedItems$ = this.itemsQuery.selectAll().pipe(
      map(itmes => itmes.filter(item=> {return item.received;})));
  }

}
