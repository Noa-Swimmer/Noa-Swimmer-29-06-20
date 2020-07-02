import { ItemsStore } from './item.store';
import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { ItemsList } from 'src/app/mock/items.mock';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private itemStore:ItemsStore) { 
    this.itemStore.set(ItemsList)
  }

  updateActive(item: Item) {
    this.itemStore.update(item.id, { received:item.received});
  }
}
