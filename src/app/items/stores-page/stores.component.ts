import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsQuery } from '../state/item.query';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  stores$: Observable<string[]>;
  storesList :Map<string,number>;
  constructor(private itemsQuery: ItemsQuery) { }

  ngOnInit() {
    this.stores$ = this.itemsQuery.selectAll().pipe(map(entities =>
      entities.map(entity => entity.store)
      // .filter((elem, index, self) => {
      //   return index === self.indexOf(elem);
      // })
      ));

 this.stores$.subscribe(res => this.storesList = this.countItemsPerStore(res));
  }
  
countItemsPerStore(stores:string[]):Map<string,number> {
let storesList: Map<string,number>= new Map();
    var current = null;
    var cnt = 0;
    for (var i = 0; i < stores.length; i++) {
        if (stores[i] != current) {
            if (cnt > 0) {
             storesList.set(current,cnt);
            }
            current = stores[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
      storesList.set(current,cnt);
    }
return storesList;
}

}
