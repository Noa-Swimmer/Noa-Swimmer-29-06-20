import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsQuery } from '../state/item.query';
import { Item } from '../state/item.model';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  stores$ :Observable<Item[]>;
count$:Observable<number>;
  constructor(private itemsQuery: ItemsQuery) { }

  ngOnInit() {
    this.stores$ = this.itemsQuery.selectAll( 
      //  ({ store }) => store  
       );
       this.count$ = this.itemsQuery.selectCount();
       console.log(this.count$);
  }

}
